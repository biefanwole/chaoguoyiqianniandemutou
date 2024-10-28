import type { PropType } from 'vue';
import 'uno.css';
export type ISize = 'small' | 'medium' | 'large';
export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
export declare const props: {
    readonly size: {
        readonly type: PropType<ISize>;
        readonly default: "medium";
    };
    readonly color: {
        readonly type: PropType<IColor>;
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
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly type: PropType<ISize>;
        readonly default: "medium";
    };
    readonly color: {
        readonly type: PropType<IColor>;
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
        readonly type: PropType<ISize>;
        readonly default: "medium";
    };
    readonly color: {
        readonly type: PropType<IColor>;
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
    readonly size: ISize;
    readonly color: IColor;
    readonly plain: boolean;
    readonly icon: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
