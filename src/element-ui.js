import {
  Button, Select, Option, Input, Loading, Form, FormItem, Switch,
  DatePicker, Breadcrumb, BreadcrumbItem, Table,
  TableColumn, Pagination,
  Col, Row, Dialog,
  Tabs, TabPane,
  Checkbox, CheckboxGroup, Radio, RadioGroup,
  Tag, Tree,
  Popover, Tooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  MessageBox,
  Message,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Carousel,
  CarouselItem,
  Upload,
  Slider,
  ColorPicker,
  RadioButton
} from 'element-ui';
let install = function(Vue) {
  Vue.component(CheckboxGroup.name, CheckboxGroup);
  Vue.component(Checkbox.name, Checkbox);
  Vue.component(Radio.name, Radio);
  Vue.component(CheckboxGroup.name, CheckboxGroup);
  Vue.component(Checkbox.name, Checkbox);
  Vue.component(RadioGroup.name, RadioGroup);
  Vue.component(Button.name, Button);
  Vue.component(Switch.name, Switch);
  Vue.component(Select.name, Select);
  Vue.component(Option.name, Option);
  Vue.component(Input.name, Input);
  Vue.component(Form.name, Form);
  Vue.component(DatePicker.name, DatePicker);
  Vue.component(FormItem.name, FormItem);
  Vue.component(Breadcrumb.name, Breadcrumb);
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
  Vue.component(Table.name, Table);
  Vue.component(TableColumn.name, TableColumn);
  Vue.component(Pagination.name, Pagination);
  Vue.component(Popover.name, Popover);
  Vue.component(Tooltip.name, Tooltip);
  Vue.component(Col.name, Col);
  Vue.component(Row.name, Row);
  Vue.component(Dialog.name, Dialog);
  Vue.component(Dropdown.name, Dropdown);
  Vue.component(DropdownMenu.name, DropdownMenu);
  Vue.component(DropdownItem.name, DropdownItem);
  Vue.component(Tag.name, Tag);
  Vue.component(Tree.name, Tree);
  Vue.component(Tabs.name, Tabs);
  Vue.component(TabPane.name, TabPane);
  Vue.component(Upload.name, Upload);
  Vue.component(Slider.name, Slider);
  Vue.component(ColorPicker.name, ColorPicker);
  Vue.component(RadioButton.name, RadioButton);
  Vue.use(Loading.directive);
  Vue.use(Menu);
  Vue.use(Submenu);
  Vue.use(MenuItem);
  Vue.use(MenuItemGroup);
  Vue.use(Carousel);
  Vue.use(CarouselItem);
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$message = Message;
};
export default install;
