import React, { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/Button";
import { Icon as IconDeprecated } from "@/shared/ui/Icon";
import NotificationIconDeprecated from "@/shared/assets/icons/notification-20-20.svg";
// import NotificationIcon from "@/shared/assets/icons/notification.svg";
import { NotificationList } from "@/entities/Notification";
import { Popover as PopoverDeprecated } from "@/shared/ui/Popups";
import { Drawer } from "@/shared/ui/Drawer";
import cls from "./NotificationButton.module.scss";

import { Icon } from "@/shared/ui/Icon";
import { Popover } from "@/shared/ui/Popups";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <ButtonDeprecated onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <IconDeprecated Svg={NotificationIconDeprecated} inverted />
    </ButtonDeprecated>
  );

  return (
    <div>
      <BrowserView>
        <PopoverDeprecated
          className={classNames(cls.NotificationButton, {}, [className])}
          direction="bottom left"
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </PopoverDeprecated>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
});
