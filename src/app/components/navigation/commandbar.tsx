import {
    Action,
    KBarAnimator,
    KBarPortal,
    KBarPositioner,
    KBarProvider,
    KBarResults,
    KBarSearch,
    useMatches,
  } from "kbar";
  import React, { HTMLAttributes } from "react";
  
  interface CommandBarProps extends HTMLAttributes<HTMLElement> {
    actions: Action[];
  }
  
  const CommandBar: React.FC<CommandBarProps> = ({ actions, children }) => {
    return (
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner className="bg-black/30">
            <KBarAnimator className="px-8 bg-white dark:bg-[#121212] rounded-xl shadow-xl flex flex-col gap-4 w-[35rem] overflow-hidden">
            <KBarSearch className="w-full outline-none py-4 text-black text-xl font-[family-name:var(--font-geist-sans)]" defaultPlaceholder="Type a command or search..." />
            <hr className="border-white dark:border-[#333333]" />
                <div className="py-4">
                    <SearchResults />
                </div>
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>
    );
  };
  
  const SearchResults = () => {
    const { results } = useMatches();
  
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === "string" ? (
            <div className="text-sm px-2 pb-2 text-neutral-500 font-[family-name:var(--font-geist-sans)]">
              {item}
            </div>
          ) : (
            <div
              className={`text-black dark:text-white flex px-4 py-3 font-[family-name:var(--font-geist-sans)] cursor-pointer ${
                active ? "bg-[#aaaaaa] dark:bg-[#333333] rounded-xl" : "bg-transparent"
              }`}
            >
              {item.name}
            </div>
          )
        }
      />
    );
  };
  
  export default CommandBar;