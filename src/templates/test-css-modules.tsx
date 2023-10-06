import { GetPath, TemplateProps } from "@yext/pages";
import CssButton from "../components/atoms/css-button/CssButton";

export const getPath: GetPath<TemplateProps> = () => {
  return "test";
};

export default function TestCssModules() {
  return <CssButton type="primary" size="xxlarge" text="Button" className="" />;
}
