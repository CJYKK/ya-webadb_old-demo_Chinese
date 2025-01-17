import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { AdbDaemonWebUsbDevice } from "@yume-chan/adb-daemon-webusb";
import {
    aoaGetProtocol,
    aoaSetAudioMode,
    aoaStartAccessory,
} from "@yume-chan/aoa";
import { observer } from "mobx-react-lite";
import { useCallback, useState } from "react";
import { GLOBAL_STATE } from "../state";

function AudioPage() {
    const [supported, setSupported] = useState<boolean | undefined>(undefined);
    const handleQuerySupportClick = useCallback(async () => {
        const transport = GLOBAL_STATE.device as AdbDaemonWebUsbDevice;
        const device = transport.raw;
        const version = await aoaGetProtocol(device);
        setSupported(version >= 2);
    }, []);

    const handleEnableClick = useCallback(async () => {
        const transport = GLOBAL_STATE.device as AdbDaemonWebUsbDevice;
        const device = transport.raw;
        const version = await aoaGetProtocol(device);
        if (version < 2) {
            return;
        }
        await aoaSetAudioMode(device, 1);
        await aoaStartAccessory(device);
    }, []);
    const handleDisableClick = useCallback(async () => {
        const transport = GLOBAL_STATE.device as AdbDaemonWebUsbDevice;
        const device = transport.raw;
        const version = await aoaGetProtocol(device);
        if (version < 2) {
            return;
        }
        await aoaSetAudioMode(device, 0);
        await aoaStartAccessory(device);
    }, []);

    if (
        !GLOBAL_STATE.device ||
        !(GLOBAL_STATE.device instanceof AdbDaemonWebUsbDevice)
    ) {
        return (
            <div>音频转发只能与WebUSB连接使用。</div>
        );
    }

    return (
        <div>
            <div>
                已支持：{" "}
                {supported === undefined ? "Unknown" : supported ? "Yes" : "No"}
            </div>
            <div>
                <PrimaryButton
                    disabled={!GLOBAL_STATE.device}
                    onClick={handleQuerySupportClick}
                >
                    查询支持
                </PrimaryButton>
                <DefaultButton
                    disabled={!supported}
                    onClick={handleEnableClick}
                >
                    启用
                </DefaultButton>
                <DefaultButton
                    disabled={!supported}
                    onClick={handleDisableClick}
                >
                    禁用
                </DefaultButton>
            </div>
        </div>
    );
}

export default observer(AudioPage);
