// cspell: ignore bootloader
// cspell: ignore fastboot

import {
    DefaultButton,
    Icon,
    MessageBar,
    MessageBarType,
    Stack,
    TooltipHost,
} from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import Head from "next/head";
import { GLOBAL_STATE } from "../state";
import { Icons, RouteStackProps } from "../utils";

const Power: NextPage = () => {
    return (
        <Stack {...RouteStackProps}>
            <Head>
                <title>电源菜单 - Tango</title>
            </Head>

            <div>
                <DefaultButton
                    text="重启"
                    disabled={!GLOBAL_STATE.adb}
                    onClick={() => GLOBAL_STATE.adb!.power.reboot()}
                />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton
                    text="关机"
                    disabled={!GLOBAL_STATE.adb}
                    onClick={() => GLOBAL_STATE.adb!.power.powerOff()}
                />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton
                    text="按下电源按钮"
                    disabled={!GLOBAL_STATE.adb}
                    onClick={() => GLOBAL_STATE.adb!.power.powerButton()}
                />
            </div>

            <div style={{ marginTop: 20 }}>
                <MessageBar
                    messageBarType={MessageBarType.severeWarning}
                    delayedRender={false}
                >
                    下方为危险区
                </MessageBar>
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton
                    text="重启到Bootloader"
                    disabled={!GLOBAL_STATE.adb}
                    onClick={() => GLOBAL_STATE.adb!.power.bootloader()}
                />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton
                    text="重启到Fastboot"
                    disabled={!GLOBAL_STATE.adb}
                    onClick={() => GLOBAL_STATE.adb!.power.fastboot()}
                />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton
                    text="重启到Recovery"
                    disabled={!GLOBAL_STATE.adb}
                    onClick={() => GLOBAL_STATE.adb!.power.recovery()}
                />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton
                    text="重启到Sideload"
                    disabled={!GLOBAL_STATE.adb}
                    onClick={() => GLOBAL_STATE.adb!.power.sideload()}
                />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton
                    text="重启到高通EDL模式"
                    disabled={!GLOBAL_STATE.adb}
                    onClick={() => GLOBAL_STATE.adb!.power.qualcommEdlMode()}
                />
                <TooltipHost
                    content={<span>仅适用于某些高通设备。</span>}
                >
                    <Icon
                        style={{
                            verticalAlign: "middle",
                            marginLeft: 4,
                            fontSize: 18,
                        }}
                        iconName={Icons.Info}
                    />
                </TooltipHost>
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton
                    text="重启到三星Odin Download模式"
                    disabled={!GLOBAL_STATE.adb}
                    onClick={() => GLOBAL_STATE.adb!.power.samsungOdin()}
                />
                <TooltipHost
                    content={<span>仅适用于三星设备。</span>}
                >
                    <Icon
                        style={{
                            verticalAlign: "middle",
                            marginLeft: 4,
                            fontSize: 18,
                        }}
                        iconName={Icons.Info}
                    />
                </TooltipHost>
            </div>
        </Stack>
    );
};

export default observer(Power);
