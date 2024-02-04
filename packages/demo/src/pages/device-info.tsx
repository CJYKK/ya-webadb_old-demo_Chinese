import {
    Icon,
    MessageBar,
    Separator,
    Stack,
    TooltipHost,
} from "@fluentui/react";
import { AdbFeature } from "@yume-chan/adb";
import { observer } from "mobx-react-lite";
import type { NextPage } from "next";
import Head from "next/head";
import { GLOBAL_STATE } from "../state";
import { Icons, RouteStackProps } from "../utils";

const KNOWN_FEATURES: Record<string, string> = {
    [AdbFeature.ShellV2]: `“shell”命令现在支持将子进程的stdout和stderr分开，并返回退出码`,
    // 'cmd': '',
    [AdbFeature.StatV2]:
        '“sync”命令现在支持“STA2”（返回比旧版“STAT”更多的文件信息）和“LST2”（返回目录信息）子命令',
    [AdbFeature.ListV2]:
        '“sync”命令现在支持“LST2”子命令，相对于旧版的“LIST”，它能够在列出目录时提供更多信息',
    [AdbFeature.FixedPushMkdir]:
        "Android 9（P）引入了一个问题，将文件推送到不存在的目录时会失败。此功能表示该问题已修复（Android 10）",
    // 'apex': '',
    // 'abb': '',
    // 'fixed_push_symlink_timestamp': '',
    [AdbFeature.AbbExec]:
        '支持“abb_exec”的变体，可用于更快地安装应用程序',
    // 'remount_shell': '',
    // 'track_app': '',
    // 'sendrecv_v2': '',
    sendrecv_v2_brotli:
        '在推送/拉取文件时支持“brotli”压缩算法',
    sendrecv_v2_lz4:
        '在推送/拉取文件时支持“lz4”压缩算法',
    sendrecv_v2_zstd:
        '在推送/拉取文件时支持“zstd”压缩算法',
    // 'sendrecv_v2_dry_run_send': '',
};

const DeviceInfo: NextPage = () => {
    return (
        <Stack {...RouteStackProps}>
            <Head>
                <title>设备信息 - Tango</title>
            </Head>

            <MessageBar delayedRender={false}>
                <span>Android构建属性中的</span>
                <code>ro.product.name</code>
                <span>字段</span>
            </MessageBar>
            <span>产品名称：{GLOBAL_STATE.adb?.banner.product}</span>
            <Separator />

            <MessageBar delayedRender={false}>
                <span>Android构建属性中的</span>
                <code>ro.product.model</code>
                <span>字段</span>
            </MessageBar>
            <span>型号名称：{GLOBAL_STATE.adb?.banner.model}</span>
            <Separator />

            <MessageBar delayedRender={false}>
                <span>Android构建属性中的</span>
                <code>ro.product.device</code>
                <span>字段</span>
            </MessageBar>
            <span>设备名称：{GLOBAL_STATE.adb?.banner.device}</span>
            <Separator />

            <MessageBar delayedRender={false}>
                <span>
                    功能列表决定了每个单独命令的行为方式。
                </span>
                <br />

                <span>
                    例如，它可能表示一个新命令的可用性，或者因为已经修复了一个旧bug，所以不再需要绕过它。
                </span>
                <br />
            </MessageBar>
            <span>
                <span>功能列表：</span>
                {GLOBAL_STATE.adb?.banner.features.map((feature, index) => (
                    <span key={feature}>
                        {index !== 0 && <span>, </span>}
                        <span>{feature}</span>
                        {KNOWN_FEATURES[feature] && (
                            <TooltipHost
                                content={<span>{KNOWN_FEATURES[feature]}</span>}
                            >
                                <Icon
                                    style={{ marginLeft: 4 }}
                                    iconName={Icons.Info}
                                />
                            </TooltipHost>
                        )}
                    </span>
                ))}
            </span>
        </Stack>
    );
};

export default observer(DeviceInfo);
