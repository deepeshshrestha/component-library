import * as React from "react";
import { useState } from "react";

import "./style.css";

import { ListType, SelectProps } from "./typed";

const Select: React.FC<SelectProps> = ({
  list,
  value,
  selectedOption,
  style,
  props,
}) => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [selected, setSelected] = useState<ListType | undefined>(undefined);

  const setSelctedOption = (li: ListType) => {
    setOpenSelect(!openSelect);
    setSelected(li);
    selectedOption(li.name);
  };

  return (
    <div className="dropdown" style={style} {...props}>
      <div
        className="button"
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
      >
        {selected && selected.icon && (
          <div className="icon">{selected && selected.icon}</div>
        )}
        {selected && selected.name ? selected.name : value}
      </div>

      {openSelect ? (
        <ul>
          {list.map((li, index) => (
            <li key={index} onClick={() => setSelctedOption(li)}>
              <div className="icon">{li.icon}</div>
              {li.path ? (
                <a className="active" href="#Create Page">
                  {li.name}
                </a>
              ) : (
                <> {li.name}</>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
