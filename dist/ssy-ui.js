import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createVNode } from "vue";
const version = "1.0.0";
const _hoisted_1 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Avatar"
  },
  __name: "Avatar",
  props: {
    url: {},
    round: { type: Boolean, default: false },
    size: { default: "24px" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("img", {
        src: _ctx.url,
        alt: "",
        class: normalizeClass(["object-cover", _ctx.round ? "rounded-full" : "rounded-lg"]),
        style: normalizeStyle({ width: _ctx.size, height: _ctx.size })
      }, null, 14, _hoisted_1);
    };
  }
});
const componentPrefix = "S";
function withInstall(options) {
  options.install = (app) => {
    const { name } = options;
    if (name) {
      app.component(componentPrefix + name, options);
    }
  };
  return options;
}
const props = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "blue"
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  }
};
const _Button = /* @__PURE__ */ defineComponent({
  name: "Button",
  props,
  setup(props2, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": `
          py-${size[props2.size].y}
          px-${size[props2.size].x}
          ${props2.round ? "rounded-full" : "rounded-lg"}
          bg-${props2.color}-${props2.plain ? "100" : "500"}
          hover:bg-${props2.color}-400
          border-${props2.color}-${props2.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props2.plain ? `${props2.color}-500` : "white"}
          text-${size[props2.size].text}
          hover-text-white=""
          transition="" duration-300="" ease-in-out="" transform="" hover-scale-105=""
          mx-1=""
          `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const Button = withInstall(_Button);
const linkProps = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "purple"
  }
};
const _Link = /* @__PURE__ */ defineComponent({
  name: "Link",
  props: linkProps,
  setup(props2, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("a", {
      "class": ` 
              hover:text-white
              cursor-pointer
              py-${size[props2.size].y}
              px-${size[props2.size].x}
              text-${`${props2.color}-500`}
              text-${size[props2.size].text}
              hover:bg-${props2.color}-400
              `
    }, [createVNode("span", null, [" ", slots.default ? slots.default() : "默认链接", " "])]);
  }
});
const Link = withInstall(_Link);
function avaPlugin(app) {
  app.component("Avatar", _sfc_main);
}
const plugins = [Link, Button, avaPlugin];
const Avatar = withInstall(_sfc_main);
const entry = {
  install(app) {
    plugins.forEach((c) => app.use(c));
  },
  version
};
export {
  Avatar,
  Button,
  Link,
  entry as default,
  linkProps
};
