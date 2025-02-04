import { MessageFilled, SettingOutlined } from "@ant-design/icons";
import { Avatar, message, Tooltip } from "antd";
import getInitials from "../../../util/getInitials";
import { ISiderBarIcon } from "./SiderBar.model";
import { Container, IconSelectedWrapper, SIconWrapper } from "./SiderBar.style";

export default function SiderBarView() {

  const SidebarIcon = ({
    type,
    onClick,
    selected,
    popNumber = null,
    opened,
    customIcon,
    placement = 'right',
    style
  }: ISiderBarIcon) => (
    <SIconWrapper onClick={onClick}>
      <Tooltip
        placement={placement}
        title={type}
        open={opened}
        style={style}
      >
        <IconSelectedWrapper selected={selected} style={style}>

          {customIcon && customIcon}

          <div className="popNumber">
            {popNumber}
          </div>
        </IconSelectedWrapper>
      </Tooltip>
    </SIconWrapper>
  );

  return (
    <Container>

      <SidebarIcon
        type={'Conversas'}
        customIcon={<MessageFilled className="icon" />}
        selected={true}
        style={{ borderRadius: 100 }}
      />

      <div className="siderBar-footer">

        <SidebarIcon
          type={"Configurações"}
          customIcon={<SettingOutlined className="icon" />}
          selected={false}
          onClick={() => message.warning("Ops, funcionalidade em construção")}
        />

        <Tooltip title="Gabriel Amâncio De Oliveira" placement="right">
          <Avatar className="siderbar-avatar">
            {getInitials('Gabriel Amâncio De Oliveira')}
          </Avatar>
        </Tooltip>

      </div>

    </Container>
  );
}