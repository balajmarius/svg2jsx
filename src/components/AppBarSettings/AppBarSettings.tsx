import React from "react";
import { FormattedMessage } from "react-intl";
import { twMerge } from "tailwind-merge";
import { useIsClient } from "usehooks-ts";
import { Drawer } from "vaul";

import { useCodeDeck } from "@/hooks/useCodeDeck";

import { Text } from "@/components/Text";
import { Checkbox } from "@/components/Checkbox";
import { SvgIconGear, SvgIconPending } from "@/components/SvgIcon";

export interface AppBarSettingsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

interface SettingsControlsProps {
  placement: "desktop" | "drawer";
  cx: React.HTMLProps<HTMLElement>["className"];
}

const SettingsControls: React.FC<SettingsControlsProps> = ({ placement, cx }) => {
  const { memo, typescript, jsxSingleQuote, cleanupIds, setMemo, setTypeScript, setJsxSingleQuote, setCleanupIds } =
    useCodeDeck();
  const isClient = useIsClient();

  return (
    <div className={cx}>
      {isClient ? (
        <>
          <Checkbox name={`cleanupIds-${placement}`} checked={cleanupIds} onChange={setCleanupIds}>
            <Text variant="overline">
              <FormattedMessage id="APPBAR_SETTINGS_IDS" />
            </Text>
          </Checkbox>
          <Checkbox name={`jsxSingleQuote-${placement}`} checked={jsxSingleQuote} onChange={setJsxSingleQuote}>
            <Text variant="overline">
              <FormattedMessage id="APPBAR_SETTINGS_QUOTES" />
            </Text>
          </Checkbox>
          <Checkbox name={`memo-${placement}`} checked={memo} onChange={setMemo}>
            <Text variant="overline">
              <FormattedMessage id="APPBAR_SETTINGS_MEMO" />
            </Text>
          </Checkbox>
          <Checkbox name={`typescript-${placement}`} checked={typescript} onChange={setTypeScript}>
            <Text variant="overline">
              <FormattedMessage id="APPBAR_SETTINGS_TYPESCRIPT" />
            </Text>
          </Checkbox>
        </>
      ) : null}
    </div>
  );
};

interface ConversionStatusProps {
  cx: React.HTMLProps<HTMLElement>["className"];
}

const ConversionStatus: React.FC<ConversionStatusProps> = ({ cx }) => {
  const { isSuccess, isError, isPending } = useCodeDeck();

  return (
    <div className={cx}>
      <Text variant="body" cx="w-12 text-right">
        <FormattedMessage id="APPBAR_SETTINGS_INPUT" />
      </Text>
      <Text variant="title" cx="w-9">
        <FormattedMessage id="APPBAR_SETTINGS_SVG" />
      </Text>

      <div
        className={twMerge(
          "bg-purple-100 border-2 border-gray-250 size-10 flex-center rounded-full transition-colors duration-200 ease-out",
          isError && "bg-red-50",
          isSuccess && "bg-green-100",
        )}
      >
        {isPending ? <SvgIconPending /> : <SvgIconGear />}
      </div>

      <Text variant="title" cx="w-9">
        <FormattedMessage id="APPBAR_SETTINGS_JSX" />
      </Text>
      <Text variant="body" cx="w-12">
        <FormattedMessage id="APPBAR_SETTINGS_OUTPUT" />
      </Text>
    </div>
  );
};

export const AppBarSettings: React.FC<AppBarSettingsProps> = ({ className, ...props }) => {
  const [drawerContainer, setDrawerContainer] = React.useState<HTMLDivElement | null>(null);

  return (
    <div
      ref={setDrawerContainer}
      className={twMerge(
        "bg-gray-100 border-b-2 border-gray-250 relative shrink-0 grid grid-cols-12 px-3 py-4 md:bg-appbar-1 md:px-6 md:py-3",
        className,
      )}
      {...props}
    >
      <div className="col-span-12 flex justify-end md:hidden">
        <Drawer.Root handleOnly>
          <Drawer.Trigger asChild>
            <button type="button" className="text-white flex items-center gap-2 transition-transform active:scale-95">
              <SvgIconGear size="sm" />
              <Text variant="caption">
                <FormattedMessage id="APPBAR_SETTINGS_TITLE" />
              </Text>
            </button>
          </Drawer.Trigger>

          <Drawer.Portal container={drawerContainer}>
            <Drawer.Overlay className="bg-gray-250/80 fixed inset-0 z-40" />
            <Drawer.Content className="bg-gray-100 border-2 border-b-0 border-gray-250 fixed inset-x-0 bottom-0 z-50 max-h-screen rounded-t-2xl text-white outline-none">
              <Drawer.Handle className="bg-gray-50 mx-auto mt-3 h-1.5 w-12 rounded-full" />

              <Drawer.Title className="sr-only">
                <FormattedMessage id="APPBAR_SETTINGS_TITLE" />
              </Drawer.Title>
              <Drawer.Description className="sr-only">
                <FormattedMessage id="APPBAR_SETTINGS_DESCRIPTION" />
              </Drawer.Description>

              <SettingsControls placement="drawer" cx="grid grid-cols-1 gap-y-2 px-6 pb-6 pt-4 text-gray-50" />
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>

      <SettingsControls
        placement="desktop"
        cx="hidden text-gray-50 md:col-span-4 md:flex md:items-center md:justify-start md:gap-4"
      />

      <ConversionStatus cx="hidden md:col-span-4 md:flex-center md:gap-3" />
    </div>
  );
};

export default AppBarSettings;
