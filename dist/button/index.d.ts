export declare const Button: import("../utils/with-install").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly type: import("vue").PropType<import("./Button").ISize>;
        readonly default: "medium";
    };
    readonly color: {
        readonly type: import("vue").PropType<import("./Button").IColor>;
        readonly default: "blue";
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly type: import("vue").PropType<import("./Button").ISize>;
        readonly default: "medium";
    };
    readonly color: {
        readonly type: import("vue").PropType<import("./Button").IColor>;
        readonly default: "blue";
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>> & Readonly<{}>, {
    readonly round: boolean;
    readonly size: import("./Button").ISize;
    readonly color: import("./Button").IColor;
    readonly plain: boolean;
    readonly icon: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Button;
declare module 'vue' {
    interface GlobalComponents {
        SButton: typeof Button;
    }
}
