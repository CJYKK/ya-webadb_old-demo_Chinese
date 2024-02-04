import {
    Dropdown,
    IDropdownOption,
    Position,
    Separator,
    SpinButton,
    Toggle,
} from "@fluentui/react";
import {
    DemoMode,
    DemoModeMobileDataType,
    DemoModeMobileDataTypes,
    DemoModeSignalStrength,
    DemoModeStatusBarMode,
    DemoModeStatusBarModes,
} from "@yume-chan/android-bin";
import { autorun, makeAutoObservable, reaction, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { CSSProperties, useCallback } from "react";
import { GLOBAL_STATE } from "../state";

const SignalStrengthOptions = Object.values(DemoModeSignalStrength).map(
    (key) => ({
        key,
        text: {
            [DemoModeSignalStrength.Hidden]: "隐藏",
            [DemoModeSignalStrength.Level0]: "等级0",
            [DemoModeSignalStrength.Level1]: "等级1",
            [DemoModeSignalStrength.Level2]: "等级2",
            [DemoModeSignalStrength.Level3]: "等级3",
            [DemoModeSignalStrength.Level4]: "等级4",
        }[key],
    })
);

const MobileDataTypeOptions = DemoModeMobileDataTypes.map((key) => ({
    key,
    text: {
        "1x": "1X",
        "3g": "3G",
        "4g": "4G",
        "4g+": "4G+",
        "5g": "5G",
        "5ge": "5GE",
        "5g+": "5G+",
        e: "EDGE",
        // cspell: disable-next-line
        g: "GPRS",
        // cspell: disable-next-line
        h: "HSPA",
        // cspell: disable-next-line
        "h+": "HSPA+",
        lte: "LTE",
        "lte+": "LTE+",
        dis: "已禁用",
        not: "非默认SIM卡",
        null: "未知",
    }[key],
}));

const StatusBarModeOptions = DemoModeStatusBarModes.map((key) => ({
    key,
    text: {
        opaque: "不透明",
        translucent: "半透明（translucent）",
        "semi-transparent": "半透明（semi-transparent）",
        transparent: "透明",
        warning: "警告",
    }[key],
}));

class DemoModePanelState {
    demoMode: DemoMode | undefined;

    allowed = false;
    enabled = false;
    features: Map<string, unknown> = new Map();

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => GLOBAL_STATE.adb,
            async (device) => {
                if (device) {
                    runInAction(() => (this.demoMode = new DemoMode(device)));
                    const allowed = await this.demoMode!.getAllowed();
                    runInAction(() => (this.allowed = allowed));
                    if (allowed) {
                        const enabled = await this.demoMode!.getEnabled();
                        runInAction(() => (this.enabled = enabled));
                    }
                } else {
                    this.demoMode = undefined;
                    this.allowed = false;
                    this.enabled = false;
                    this.features.clear();
                }
            },
            { fireImmediately: true }
        );

        // Apply all features when enable
        autorun(() => {
            if (this.enabled) {
                for (const group of FEATURES) {
                    for (const feature of group) {
                        feature.onChange(
                            this.features.get(feature.key) ?? feature.initial
                        );
                    }
                }
            }
        });
    }
}

const state = new DemoModePanelState();

interface FeatureDefinition {
    key: string;
    label: string;
    type: string;
    min?: number;
    max?: number;
    step?: number;
    options?: { key: string; text: string }[];
    initial: unknown;
    onChange: (value: unknown) => void;
}

const FEATURES: FeatureDefinition[][] = [
    [
        {
            key: "batteryLevel",
            label: "电池电量",
            type: "number",
            min: 0,
            max: 100,
            step: 1,
            initial: 100,
            onChange: (value) =>
                state.demoMode!.setBatteryLevel(value as number),
        },
        {
            key: "batteryCharging",
            label: "正在充电",
            type: "boolean",
            initial: false,
            onChange: (value) =>
                state.demoMode!.setBatteryCharging(value as boolean),
        },
        {
            key: "powerSaveMode",
            label: "省电模式",
            type: "boolean",
            initial: false,
            onChange: (value) =>
                state.demoMode!.setPowerSaveMode(value as boolean),
        },
    ],
    [
        {
            key: "wifiSignalStrength",
            label: "WiFi信号强度",
            type: "select",
            options: SignalStrengthOptions,
            initial: DemoModeSignalStrength.Level4,
            onChange: (value) =>
                state.demoMode!.setWifiSignalStrength(
                    value as DemoModeSignalStrength
                ),
        },
        {
            key: "airplaneMode",
            label: "飞行模式",
            type: "boolean",
            initial: false,
            onChange: (value) =>
                state.demoMode!.setAirplaneMode(value as boolean),
        },
        {
            key: "mobileDataType",
            label: "移动数据类型",
            type: "select",
            options: MobileDataTypeOptions,
            initial: "lte",
            onChange: (value) =>
                state.demoMode!.setMobileDataType(
                    value as DemoModeMobileDataType
                ),
        },
        {
            key: "mobileSignalStrength",
            label: "移动信号强度",
            type: "select",
            options: SignalStrengthOptions,
            initial: DemoModeSignalStrength.Level4,
            onChange: (value) =>
                state.demoMode!.setMobileSignalStrength(
                    value as DemoModeSignalStrength
                ),
        },
    ],
    [
        {
            key: "statusBarMode",
            label: "状态栏模式",
            type: "select",
            options: StatusBarModeOptions,
            initial: "transparent",
            onChange: (value) =>
                state.demoMode!.setStatusBarMode(
                    value as DemoModeStatusBarMode
                ),
        },
        {
            key: "vibrateMode",
            label: "振动模式指示器",
            type: "boolean",
            initial: false,
            onChange: (value) =>
                state.demoMode!.setVibrateModeEnabled(value as boolean),
        },
        {
            key: "bluetoothConnected",
            label: "蓝牙指示器",
            type: "boolean",
            initial: false,
            onChange: (value) =>
                state.demoMode!.setBluetoothConnected(value as boolean),
        },
        {
            key: "locatingIcon",
            label: "正在定位图标",
            type: "boolean",
            initial: false,
            onChange: (value) =>
                state.demoMode!.setLocatingIcon(value as boolean),
        },
        {
            key: "alarmIcon",
            label: "闹钟图标",
            type: "boolean",
            initial: false,
            onChange: (value) => state.demoMode!.setAlarmIcon(value as boolean),
        },
        {
            key: "notificationsVisibility",
            label: "通知可见性",
            type: "boolean",
            initial: true,
            onChange: (value) =>
                state.demoMode!.setNotificationsVisibility(value as boolean),
        },
        {
            key: "hour",
            label: "时钟-小时",
            type: "number",
            min: 0,
            max: 23,
            step: 1,
            initial: 12,
            onChange: (value) =>
                state.demoMode!.setTime(
                    value as number,
                    (state.features.get("minute") as number | undefined) ?? 34
                ),
        },
        {
            key: "minute",
            label: "时钟-分钟",
            type: "number",
            min: 0,
            max: 59,
            step: 1,
            initial: 34,
            onChange: (value) =>
                state.demoMode!.setTime(
                    (state.features.get("hour") as number | undefined) ?? 34,
                    value as number
                ),
        },
    ],
];

const FeatureBase = ({ feature }: { feature: FeatureDefinition }) => {
    const handleChange = useCallback(
        (e: unknown, value: unknown) => {
            switch (feature.type) {
                case "select":
                    value = (value as IDropdownOption).key;
                    break;
                case "number":
                    value = parseFloat(value as string);
                default:
                    break;
            }

            feature.onChange(value);
            runInAction(() => {
                state.features.set(feature.key, value);
                state.enabled = true;
            });
        },
        [feature]
    );

    const value = state.features.get(feature.key) ?? feature.initial;

    switch (feature.type) {
        case "boolean":
            return (
                <Toggle
                    label={feature.label}
                    disabled={!state.allowed}
                    checked={value as boolean}
                    onChange={handleChange}
                />
            );
        case "number":
            return (
                <SpinButton
                    label={feature.label}
                    labelPosition={Position.top}
                    disabled={!state.allowed}
                    min={feature.min}
                    max={feature.max}
                    step={feature.step}
                    value={value as string}
                    onChange={handleChange}
                />
            );
        case "select":
            return (
                <Dropdown
                    label={feature.label}
                    disabled={!state.allowed}
                    options={feature.options!}
                    selectedKey={value as string}
                    onChange={handleChange}
                />
            );
        default:
            return null;
    }
};

const Feature = observer(FeatureBase);

export interface DemoModePanelProps {
    style?: CSSProperties;
}

export const DemoModePanel = observer(({ style }: DemoModePanelProps) => {
    const handleAllowedChange = useCallback(
        async (e: unknown, value?: boolean) => {
            await state.demoMode!.setAllowed(value!);
            runInAction(() => {
                state.allowed = value!;
                state.enabled = false;
            });
        },
        []
    );

    const handleEnabledChange = useCallback(
        async (e: unknown, value?: boolean) => {
            await state.demoMode!.setEnabled(value!);
            runInAction(() => (state.enabled = value!));
        },
        []
    );

    return (
        <div style={{ padding: 12, overflow: "hidden auto", ...style }}>
            <Toggle
                label="允许"
                disabled={!GLOBAL_STATE.adb}
                checked={state.allowed}
                onChange={handleAllowedChange}
            />

            <Toggle
                label="启用"
                disabled={!state.allowed}
                checked={state.enabled}
                onChange={handleEnabledChange}
            />

            <div>
                <strong>提示：</strong>
            </div>
            <div>设备可能不支持所有选项。</div>

            {FEATURES.map((group, index) => (
                <div key={index}>
                    <Separator />

                    {group.map((feature) => (
                        <Feature key={feature.key} feature={feature} />
                    ))}
                </div>
            ))}
        </div>
    );
});
