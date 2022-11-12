import React, { useContext, useEffect, useState } from "react";
import styles from "./main.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { Box, Circle, Flex, HStack, Image, Input, SimpleGrid, Spacer, Stack, Text, useToast, Wrap } from "@chakra-ui/react";
import SearchBar from "./smallComp.jsx/SearchBar";
import SearchBar2 from "./smallComp.jsx/SearchBar2";
import { Icon } from "@chakra-ui/react";


const Navbar = () => {

  const { userName, isAuth, logoutUser, cartData, TotalQty } = useContext(AppContext);

  console.log(isAuth)

  const [active, setActive] = useState("Men");
  const [info, setinfo] = useState(false);
  const toast = useToast()
  // console.log(userName)

  const token = localStorage.getItem("jwtoken");

  const activeStyle = {
    color: "#F70A8B",

    textDecoration: "none",


    borderBottom: "4px solid #FB05DD",

  };
  const defaultStyle = {
    color: "black",
    textDecoration: "none",
    BsBorderBottom: "#FB05DD"
  };


  /// LOGOUT 
  const LogOut_User = () => {

    console.log("LOGOUT IS RUNNUNG")
    toast({
      title: 'LOGOUT User Sucessfull.',

      description: "created by Rahul",
      status: 'warning',
      duration: 1000,
      isClosable: true,
    })

    logoutUser()
  }



  return (
    <div id={styles.fixedNav}>
      <Box display={{ base: "none", md: "block" }} className={styles.upperDiv}  >
        <div className={styles.upHead} >

          <div >
            <div>Offers </div>
            <div>Fanbook </div>
            <div>Download App</div>
            <div>TriBe Membership</div>
          </div>

          <div>
            <div>Contact Us  </div>
            <div>Track Order </div>

          </div>

        </div>

      </Box>

      <Wrap spacing={{ base: -11, md: "none" }} id={styles.WrapNav} w="fit-content" columns={[1, 2]} >



        <HStack id={styles.menuNav}  >
          <li>
            <NavLink to="/">
              <Image
                id="beautybebo"
                src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"
                alt="logo"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/men-clothing"
              onClick={() => setActive("")}
            >
              MAKEUP
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      <h5>BB Cream</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      Blonzer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      Blush
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      CC Cream
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      {" "}
                      Counter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      Concleaner
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/men-clothing"
                      onClick={() => setActive("")}
                    >
                      Face Primer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">Foundation </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">HighLighters</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men-clothing">
                      Loose Powder
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/men">
                      <h5>Fale EyeLashes</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/men-joggers"
                      onClick={() => setActive("")}
                    >
                      Kajal
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">Boxers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">Sorts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">Lipstick</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">LipBlam</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">Lip Cleaner</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">Lip Gloss </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">
                      Lip Liner
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">bRIEFS</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <h5>Nail Polish</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/men-activewear"
                      onClick={() => setActive("")}
                    >
                      Activewear
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Nail Claener
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">Nail Art Kits</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <h5>Nail Polish Remover</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Marati Mascara
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">Macos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Eye Shadow
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Eye brush
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Face brush
                    </NavLink>
                  </li>
                </ul>

                <hr />
                <ul>
                  <li>
                    <NavLink to="mobile-covers-india">
                      <span></span>
                      <img style={{width:"80%"}}
                        src="https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/1/5/159.jpg"
                        alt=""
                      />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/women-clothing" onClick={() => setActive("")}>
              SKIN
            </NavLink>
            <div id={styles.mainMenu2}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink to="/women">
                      <h5>All Cream</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/women-clothing"
                      onClick={() => setActive("")}
                    >
                      Body Moisturizers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing">
                    Body Toners
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/women-clothing"
                      onClick={() => setActive("")}
                    >
                      Body Sun Care
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing">Brightening Lotion</NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing">Vest</NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing">Dark Circles & Wrinkles</NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing">Day Cream</NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing">Hair Remover Cream</NavLink>
                  </li>
                  <li>
                    <NavLink to="/women-clothing">Hand Creams</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/women">
                      <h5>Dry Cleaner</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/women-joggers"
                      onClick={() => setActive("")}
                    >
                      Hands & Feet
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                    Kits & Combos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">Night Cream</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      {" "}
                      <h5>Neck Creams</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      body Lotion
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">Anti- Ageing Creams</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                    Bleach Creams
                      
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                    Brightening Cream
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                    Face Wash
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/products/women-joggers">
                      <h5>Facial Wipes</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/women-pyjamas"
                      onClick={() => setActive("")}
                    >
                      Face Oil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                    Face Cleansers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">Facial Kits</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="mobile-covers-india">
                      <span></span>
                      <img style={{width:"70%"}}
                        src="https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/f/0/f0be50c8906087779261_7.jpg"
                        alt=""
                      />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/mobile-covers-india">HAIR </NavLink>
            <div id={styles.mainMenu3}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink to="/mobile-covers-india">
                      <h2 className={styles.dropH2}>HAIR CARE</h2>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">
                      <h3>Color Protection</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Dandruff</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Dry Shampoo</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Gels & Waxes</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">
                      <h3>Hair Spray </h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Hair Color/ Dye</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Hair Styling</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Hairfall & Thinning </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="mobile-covers-india">
                      <h3>HAIR LOSS</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="mobile-covers-india">Conditioner</NavLink>
                  </li>
                  <li>
                    <NavLink to="mobile-covers-india">Hair Oil</NavLink>
                  </li>
                  <li>
                    <NavLink to="mobile-covers-india">Hair Serum</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">
                      <h3>Hair Growth Solutions</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">Shampoo</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">Bath Brushes</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">Loofahs</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/products/iphone">
                      <h3>Shower Caps</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">Sponges</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">Body Wash</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">Creams</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">
                      <h3>Essential Oils</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">Foot Cream</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">Scrubs & Exfoliants</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">Ubtan & Face Packs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">Hair Shiner</NavLink>
                  </li>
                </ul>
                <hr />

                <ul>
                  <li>
                    <NavLink to="mobile-covers-india">
                      <span></span>
                      <img style={{width:"50%"}}
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-092320-ghi-korean-hair-1601316912.png?crop=0.502xw:1.00xh;0.296xw,0&resize=640:*"
                        alt=""
                      />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/mobile-covers-india">PERSONAL CARE </NavLink>
            <div id={styles.mainMenu3}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink to="/mobile-covers-india">
                      <h2 className={styles.dropH2}>BATH & BODY</h2>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">
                      <h3>Body Cleansers</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Body Massage Oil</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Body Wash</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Gels & Waxes</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">
                      <h3>BATHING ACCESSORIES</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Hair Color/ Dye</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Foot Cream</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mobile-covers-india">Hairfall & Thinning </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="mobile-covers-india">
                      <h3>Bath Brushes</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="mobile-covers-india">Shower Caps</NavLink>
                  </li>
                  <li>
                    <NavLink to="mobile-covers-india">Sponges</NavLink>
                  </li>
                  <li>
                    <NavLink to="mobile-covers-india">Lotions & Creams</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">
                      {" "}
                      <h3>Oils</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">Powder</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">Shampoo</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">Soaps</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/products/iphone">
                      <h3>Sterilizer & Cleaners</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">Rash Cream</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">Wipes</NavLink>
                  </li>
                </ul>
                <hr />
                <ul></ul>

                <ul>
                  <li>
                    <NavLink to="mobile-covers-india">
                      <span></span>
                      <img style={{width:"70%"}}
                        src="https://i.ytimg.com/vi/DxFvCFGw84U/maxresdefault.jpg"
                        alt=""
                      />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </HStack>

        <Spacer />

        <HStack w={{base:"full", md:"fit-content"}} p={2}  justifyContent="space-around"   >
 
            <Box display={{base:"none", mb:"block"}} >
            <SearchBar />
          </Box>

          {!isAuth && (
            <NavLink
              id={styles.loginButton}

              to="/login"
              onClick={() => setActive("")}
              className={styles.LogoutHOver}
            >
              Login
            </NavLink>
          )}

          {(
            <li>
              {isAuth && (
                <HStack justifyContent="space-around" style={{ textAlign: "center" }} >
                  <HStack justifyContent="space-around"  >
                    <div >

                      <p style={{ fontWeight: "bold" }}>
                        {userName}
                      </p>
                    </div>

                    <button
                      onClick={LogOut_User}
                      className={styles.LogoutHOver}
                    >
                      Logout
                    </button>
                  </HStack>


                </HStack>
              )}
            </li>
          )}
          <li>
            <p>
              <span style={{ display: "flex", alignContent: "center" }} >
                <NavLink to="/cart">
                </NavLink>
                <Image style={{width:"29px",height:"33px"}} src="data:image/png;base64,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"></Image>

                <span  >
                  {TotalQty !== 0 ? <Circle minWidth={30} bg="#C83390" >{TotalQty}</Circle> : ""}
                </span>
              </span>
            </p>
          </li>
        </HStack>
      </Wrap>


      <hr className={styles.hrLine} />

    </div>
  );
};

export default Navbar;
