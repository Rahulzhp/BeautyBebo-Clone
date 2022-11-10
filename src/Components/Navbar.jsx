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
                <ul className={styles.typesofMenu}>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://www.beautybebo.com/pub/media/wysiwyg/office.jpg"
                        alt=""
                      />
                      <span>Amine Collection</span>
                    </NavLink>
                  </li>
                  {/* <li><NavLink to="/men"><https://images.bewakoof.com/nav_menu/WinterWear-Bewakoof-Homepage-NavigationCircleIcon-1630653435.png" alt=""/><span>Winter Collection</span></NavLink></li> */}
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjmyWGr6bEJQgwlJgVA49iTFVJEBACKAbam-X51G8F_q8i3pmAw2b1tW0U1EEnU3oi7I&usqp=CAU"
                        alt=""
                      />
                      <span>Collebration</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png"
                        alt=""
                      />
                      <span>Shop Unique Brands</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://images.bewakoof.com/nav_menu/new-arrival-icon-1625237098.png"
                        alt=""
                      />
                      <span>Upcomming Collection</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                      <span>Last Size Left</span>
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
                <ul className={styles.typesofMenu}>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://image.made-in-china.com/2f0j00bSBTadOPGwkm/RoHS-FDA-CE-Ipx6-Mini-4in1-Skin-Beauty-Brush-Massager-Electric-Facial-Cleaner-Body-Cleaning-Massage-Feet-Care-Tool.jpg"
                        alt=""
                      />
                      <span>Moisturizer</span>
                    </NavLink>
                  </li>
                  {/* <li><NavLink to="mobile-covers-india"><https://images.bewakoof.com/nav_menu/WinterWear-Bewakoof-Homepage-NavigationCircleIcon-1630653435.png" alt=""/><span>Winter Collection</span></NavLink></li> */}
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <span>Mask & Peels</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png"
                        alt=""
                      />
                      <span>Serum</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://m.media-amazon.com/images/I/517Vyndth3L._SL1000_.jpg"
                        alt=""
                      />
                      <span>Toner & Astringents</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://pbs.twimg.com/tweet_video_thumb/FYK_e-2aAAAILNt.jpg"
                        alt=""
                      />
                      <span>Cleansing Creams</span>
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
                <ul></ul>

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
                  {TotalQty !== 0 ? <Circle minWidth={30} bg="#0A43F7" >{TotalQty}</Circle> : ""}
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
