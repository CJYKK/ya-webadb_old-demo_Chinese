import { Injectable } from "@angular/core";
import {
    AppService,
    NotificationsService,
    ProfilesService,
    ToolbarButton,
    ToolbarButtonProvider,
} from "tabby-core";
import { AdbState } from "./state";

@Injectable()
export class ButtonProvider extends ToolbarButtonProvider {
    constructor(
        app: AppService,
        private profile: ProfilesService,
        private notification: NotificationsService
    ) {
        super();

        app.ready$.subscribe(() => {
            this.launchProfile(false);
        });
    }

    private launchProfile(showError: boolean) {
        if (AdbState.value) {
            this.profile.openNewTabForProfile({ type: "adb", name: "Shell" });
        } else if (showError) {
            this.notification.error("请先连接你的设备");
        }
    }

    provide(): ToolbarButton[] {
        return [
            {
                icon: require("./icons/plus.svg"),
                title: "新标签页",
                click: () => {
                    this.launchProfile(true);
                },
            },
        ];
    }
}
