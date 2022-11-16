/* eslint-disable no-empty-pattern */
import React, { useContext } from "react";
import { Menu, MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { AppContextProps } from "@/pages/_app";
import { AppContext } from "@/pages/_app";

const Locale = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { lang, setLang, languages, setPreviousLang, setShouldTranslate } =
    useContext<AppContextProps>(AppContext);

  //   const { i18n } = useTranslation();

  const handleClick = (event: any, type: "logout" | "lang") => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return languages && languages.length > 0 ? (
    <div className="h-full flex items-center px-[20px] cursor-pointer">
      <div
        className="flex items-center h-[32px] border-box"
        onClick={(e) => handleClick(e, "lang")}
        onMouseEnter={(e) => handleClick(e, "lang")}
      >
        <Button
          sx={{
            height: "100%",
            color: "white",
            fontWeight: "bold",
            fontSize: 24,
            cursor: "pointer",
            fontFamily: "Signika Negative",
          }}
        >
          {lang.toUpperCase()}
        </Button>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {languages
          .map((l: any) => l.code)
          .map((l: string) => (
            <MenuItem
              key={l}
              onClick={() => {
                setShouldTranslate(true);
                setPreviousLang(l);
                setLang(l);

                // i18n?.changeLanguage(l);
                handleClose();
              }}
              aria-label={l === "fr" ? "locale-menuitem" : undefined}
              className={"text-[24px]"}
              style={{
                backgroundColor: lang === l ? "#D9D9D9" : "",
                fontFamily: "Signika Negative",
              }}
            >
              {l.toUpperCase()}
            </MenuItem>
          ))}
      </Menu>
    </div>
  ) : (
    <></>
  );
};
export default Locale;
