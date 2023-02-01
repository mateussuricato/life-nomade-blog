import * as S from "./style";
import { Category } from "@styled-icons/boxicons-regular/Category";
import { Place } from "@styled-icons/material-rounded/Place";
import { Search } from "@styled-icons/material/Search";
import { Home } from "@styled-icons/entypo/Home";
import { BookInformation } from "@styled-icons/fluentui-system-filled/BookInformation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FooterSideBar({ select, setSelect }) {
  const [showButton, setShowButton] = useState(true);

  let lastScrollTop = 0;

  const handleScroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <S.Footer active={showButton}>
        {select == 2 ? (
          <Link href="/">
            <S.Icon className="select flash" onClick={() => setSelect(2)}>
              <div>
                <Home />
                <p>Home</p>
              </div>
            </S.Icon>
          </Link>
        ) : (
          <Link href="/">
            <S.Icon className="flash" onClick={() => setSelect(2)}>
              <div>
                <Home />
                <p>Home</p>
              </div>
            </S.Icon>
          </Link>
        )}
        {select == 1 ? (
          <Link href="/category">
            <S.Icon className="select flash" onClick={() => setSelect(1)}>
              <div>
                <Place />
                <p>Lugares</p>
              </div>
            </S.Icon>
          </Link>
        ) : (
          <Link href="/category">
            <S.Icon className="flash" onClick={() => setSelect(1)}>
              <div>
                <Place />
                <p>Lugares</p>
              </div>
            </S.Icon>
          </Link>
        )}

        {select == 3 ? (
          <Link href="/search">
            <S.Icon className="select flash" onClick={() => setSelect(3)}>
              <div>
                <Search />
                <p>Buscar</p>
              </div>
            </S.Icon>
          </Link>
        ) : (
          <Link href="/search">
            <S.Icon className="flash" onClick={() => setSelect(3)}>
              <div>
                <Search />
                <p>Buscar</p>
              </div>
            </S.Icon>
          </Link>
        )}
        {select == 4 ? (
          <Link href="/sobre">
            <S.Icon className="select flash" onClick={() => setSelect(4)}>
              <div>
                <BookInformation />
                <p>Sobre nós</p>
              </div>
            </S.Icon>
          </Link>
        ) : (
          <Link href="/sobre">
            <S.Icon className="flash" onClick={() => setSelect(4)}>
              <div>
                <BookInformation />
                <p>Sobre nós</p>
              </div>
            </S.Icon>
          </Link>
        )}
      </S.Footer>
    </>
  );
}