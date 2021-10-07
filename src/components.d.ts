/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { RouterHistory } from "@stencil/router";
export namespace Components {
    interface AppAuthLogin {
        /**
          * history instance.
         */
        "history": RouterHistory;
    }
    interface AppAuthProfile {
    }
    interface AppAuthRegister {
        /**
          * history instance.
         */
        "history": RouterHistory;
    }
    interface AppFlashMessage {
        /**
          * alert closable.
         */
        "closable": boolean;
        /**
          * Show/hide alert message
         */
        "show": boolean;
        /**
          * Message type
         */
        "type": string;
    }
    interface AppHome {
    }
    interface AppPageHome {
    }
    interface AppRoot {
        /**
          * history instance.
         */
        "history": RouterHistory;
    }
}
declare global {
    interface HTMLAppAuthLoginElement extends Components.AppAuthLogin, HTMLStencilElement {
    }
    var HTMLAppAuthLoginElement: {
        prototype: HTMLAppAuthLoginElement;
        new (): HTMLAppAuthLoginElement;
    };
    interface HTMLAppAuthProfileElement extends Components.AppAuthProfile, HTMLStencilElement {
    }
    var HTMLAppAuthProfileElement: {
        prototype: HTMLAppAuthProfileElement;
        new (): HTMLAppAuthProfileElement;
    };
    interface HTMLAppAuthRegisterElement extends Components.AppAuthRegister, HTMLStencilElement {
    }
    var HTMLAppAuthRegisterElement: {
        prototype: HTMLAppAuthRegisterElement;
        new (): HTMLAppAuthRegisterElement;
    };
    interface HTMLAppFlashMessageElement extends Components.AppFlashMessage, HTMLStencilElement {
    }
    var HTMLAppFlashMessageElement: {
        prototype: HTMLAppFlashMessageElement;
        new (): HTMLAppFlashMessageElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppPageHomeElement extends Components.AppPageHome, HTMLStencilElement {
    }
    var HTMLAppPageHomeElement: {
        prototype: HTMLAppPageHomeElement;
        new (): HTMLAppPageHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-auth-login": HTMLAppAuthLoginElement;
        "app-auth-profile": HTMLAppAuthProfileElement;
        "app-auth-register": HTMLAppAuthRegisterElement;
        "app-flash-message": HTMLAppFlashMessageElement;
        "app-home": HTMLAppHomeElement;
        "app-page-home": HTMLAppPageHomeElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppAuthLogin {
        /**
          * history instance.
         */
        "history"?: RouterHistory;
    }
    interface AppAuthProfile {
    }
    interface AppAuthRegister {
        /**
          * history instance.
         */
        "history"?: RouterHistory;
    }
    interface AppFlashMessage {
        /**
          * alert closable.
         */
        "closable"?: boolean;
        /**
          * Show/hide alert message
         */
        "show"?: boolean;
        /**
          * Message type
         */
        "type"?: string;
    }
    interface AppHome {
    }
    interface AppPageHome {
    }
    interface AppRoot {
        /**
          * history instance.
         */
        "history"?: RouterHistory;
    }
    interface IntrinsicElements {
        "app-auth-login": AppAuthLogin;
        "app-auth-profile": AppAuthProfile;
        "app-auth-register": AppAuthRegister;
        "app-flash-message": AppFlashMessage;
        "app-home": AppHome;
        "app-page-home": AppPageHome;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-auth-login": LocalJSX.AppAuthLogin & JSXBase.HTMLAttributes<HTMLAppAuthLoginElement>;
            "app-auth-profile": LocalJSX.AppAuthProfile & JSXBase.HTMLAttributes<HTMLAppAuthProfileElement>;
            "app-auth-register": LocalJSX.AppAuthRegister & JSXBase.HTMLAttributes<HTMLAppAuthRegisterElement>;
            "app-flash-message": LocalJSX.AppFlashMessage & JSXBase.HTMLAttributes<HTMLAppFlashMessageElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-page-home": LocalJSX.AppPageHome & JSXBase.HTMLAttributes<HTMLAppPageHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}