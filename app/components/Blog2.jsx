"use client"
import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Head from 'next/head';
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import '../globals.css'
import { useRouter } from "next/navigation";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
const baseurl = "https://backblog.kusheldigi.com";

function Blog2() {
  const [currAllBlogs, setCurrAllBlogs] = useState([]);

  const [show, setShow] = useState(false);

  const [currPage, setCurrPage] = useState(1);

  const router = useRouter();

  const fetchAllBlog = async () => {
    try {
      const response = await fetch(`${baseurl}/api/v1/auth/getAllBlog`);
      const data = await response.json();
      if (response.ok) {
        setCurrAllBlogs(data?.blogs);
      } else {
        console.error("Failed to fetch categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const [allCatBlogs, setAllCatBlogs] = useState([]);
  const [recentBlog, setRecentBlog] = useState([]);
  const [featuredBlog, setFeatureBlog] = useState([]);

  const fetchCatBlogs = async () => {
    try {
      const response = await fetch(`${baseurl}/api/v1/auth/allcatBlogs`);
      const data = await response.json();

      if (response.ok) {
        setAllCatBlogs(data?.data);
      } else {
        console.error("Failed to fetch categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const featureBlogs = async () => {
    try {
      const response = await fetch(`${baseurl}/api/v1/auth/featured`);
      const data = await response.json();
      if (response.ok) {
        const d = data?.data?.blogs?.slice(0, 3);
        setFeatureBlog(d);
      } else {
        console.error("Failed to fetch categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const phoneNumber = "9045301702";
  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }

  const fetchLatestBlog = async () => {
    try {
      const response = await fetch(`${baseurl}/api/v1/auth/recentBlogs`);
      const data = await response.json();

      console.log("data", data);

      if (response.ok) {
        setRecentBlog(data?.data);
      } else {
        console.error("Failed to fetch categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchAllBlog();
    fetchCatBlogs();
    fetchLatestBlog();
    featureBlogs();
  }, []);

  const itemPerPage = 9;
  const totalPage = Math?.ceil(currAllBlogs?.length / itemPerPage);
  const [paginateData, setPaginateData] = useState([]);

  useEffect(() => {
    if (currAllBlogs?.length > 0) {
      let start = itemPerPage * (currPage - 1);
      let end = start + itemPerPage;
      const data = currAllBlogs?.slice(start, end);
      setPaginateData(data);
    }
  }, [currPage, currAllBlogs]);

  const [fixedcatblog, setfixedcatblog] = useState([]);

  const [selectedCategories, setSelectedCategory] = useState(null);
  const [filterBlog, setFilterBlog] = useState([]);

  const handleCheckboxChange = (category) => {
    if (selectedCategories === category) {
      setSelectedCategory(null);
      setFilterBlog([]);
    } else {
      setSelectedCategory(category);

      const categoryObj = allCatBlogs.find((cat) => cat.title === category);
      setFilterBlog(categoryObj ? [categoryObj] : []);
    }
  };

  const handleRemoveCategory = () => {
    setSelectedCategory(null);
    setFilterBlog([]);
  };

  useEffect(() => {

    if (filterBlog?.length === 0) {
      setfixedcatblog(allCatBlogs);
    }
    else {
      setfixedcatblog(filterBlog);
    }

  }, [filterBlog, allCatBlogs])

  const generateMetadata = ({ params }) => ({
    title: 'eCommerce Growth & Development | Kushel Digi Solutions Blog',
    description: 'Get the latest insights on optimization trends and unique development solutions and thereby unlock your Ecommerce success with Kushel Digi Solutions. Explore our blogs to scale your online store.',
  });

  useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    metaDescription ? metaDescription.content = description :
      document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
  }, []);


  return (

    <div className="kblogwrap pb-10">

      <Head>
        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta property="og:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta property="og:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta property="og:url" content="https://www.kusheldigi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta name="twitter:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta name="twitter:url" content="https://www.kusheldigi.com/" />
      </Head>

      <Navbar />
      <div className="blogsfilesect">

        <div className="blofilteconta">
          <div className="toppiselect">
            <div onClick={() => setShow(!show)} className="topsefix">
              Topics <IoIosArrowDown />
            </div>

            <div className="alltopcstore">
              {selectedCategories && (
                <div className="sincatblogs">
                  {selectedCategories}
                  <RxCross2
                    className="blgRxCross2"
                    onClick={() => handleRemoveCategory()}
                  />
                </div>
              )}
            </div>

            {show && (
              <div className="fileboxes">
                {allCatBlogs.map((cat, index) => (
                  <div
                    key={index}
                    className={`singlcatbox ${index < allCatBlogs.length - 1 && "addborbotmds"
                      }`}
                  >
                    <p>{cat?.title}</p>
                    <input
                      type="checkbox"
                      checked={selectedCategories === cat.title}
                      onChange={() => {
                        handleCheckboxChange(cat.title);
                        setShow(false);
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* second section  */}
      {
        (!selectedCategories || selectedCategories === undefined && selectedCategories === null) &&
        <section className="kblogsecondsec">
          <div className="kbsecontwrap">
            <div className="kbsecCCont">
              <img
                onClick={() => {
                  router.push(`blogdetails/${currAllBlogs[0]?._id}`);
                }}
                className="kbse2img cursor-pointer"
                src={currAllBlogs[0]?.images}
                alt="kushel"
              />

              <div className="kbsecright">
                <div className="kbsertop">
                  <img
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730457651/Mask_group_reswkg.png"
                    alt="kushel"
                  />
                  <span>
                    {new Date(currAllBlogs[0]?.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h1
                  className="cursor-pointer"
                  onClick={() => {

                    router.push(`blogdetails/${currAllBlogs[0]?._id}`);
                  }}
                >
                  {currAllBlogs[0]?.title?.length > 50 ? `${currAllBlogs[0]?.title?.slice(0, 50)}...` : currAllBlogs[0]?.title}
                </h1>

                <p
                  onClick={() => {
                    router.push(`blogdetails/${currAllBlogs[0]?._id}`);
                  }}
                  className="kblopara cursor-pointer"
                >
                  {currAllBlogs[0]?.subdescription?.length > 100
                    ? `${currAllBlogs[0].subdescription.slice(0, 100)}...`
                    : currAllBlogs[0]?.subdescription}
                </p>

                <div
                  onClick={() => {

                    router.push(`blogdetails/${currAllBlogs[0]?._id}`);
                  }}
                  className="readmorekb"
                >
                  <p>Read More</p> <GoArrowRight className="gorighafsds" />{" "}
                </div>
              </div>
            </div>

            <div className="feartureblogsc">
              <div className="article_head">
                <h2>Featured Articles</h2>
                <p className="arcl_line"></p>
              </div>

              <div className="allFeatures">
                {featuredBlog?.map((blog, index) => (
                  <div key={index}>
                    <div className="singfeaturesb">
                      <img src={blog?.images} className="feimgablog" alt="kushel" />

                      <div className="sifet_contet">
                        <h4
                          onClick={() => {

                            router.push(`blogdetails/${blog?._id}`);
                          }}
                        >
                          {blog?.title?.length > 60
                            ? `${blog?.title?.slice(0, 60)}...`
                            : blog?.title}
                        </h4>

                        <div className="authors">
                          <p>
                            <span>Author:</span> {blog?.author}
                          </p>
                          {new Date(blog?.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    </div>

                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      }

      {/* lastest section  */}
      {
        (!selectedCategories || selectedCategories === undefined && selectedCategories === null) &&
        <section className="kblogfourtsec">
          <div className="kblgfcont">
            <div className="leat_head">
              <h2>Latest articles</h2>
              <p className="lealine"></p>
            </div>

            <div className="bloginserfour">
              {recentBlog?.map((data, index) => (
                <div key={index} className="sinlatestpro">
                  <div className="singboxblog">
                    <img
                      onClick={() => {
                        router.push(`blogdetails/${data?._id}`);
                      }}
                      src={data.images[0]}
                      className="sinboximg cursor-pointer"
                      alt="kushel"
                    />

                    <div className="sinboxbrigh">
                      <div className="kbsertop">
                        <img
                          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730457651/Mask_group_reswkg.png"
                          alt="kushel"
                        />
                        <span>
                          {new Date(data?.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h4
                        className="cursor-pointer"
                        onClick={() => {
                          router.push(`/blogdetails/${data?._id}`);
                        }}
                      >
                        {data?.title?.length > 50
                          ? `${data?.title?.slice(0, 50)}...`
                          : data?.title}
                      </h4>



                      <div
                        onClick={() => {
                          router.push(`/blogdetails/${data?._id}`);
                        }}
                        className="readmorekb"
                      >
                        <p>Read More</p> <GoArrowRight className="gorighafsds" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      }

      {/* next seciton  */}

      <div className="kbllogthisec">
        {fixedcatblog?.map((group, index) => (
          <div key={index} className="singlegroblog">
            <div className="gro_heads">
              <h4>{group?.title}</h4>
              <p className="grouline"></p>
            </div>

            <div className="kkbloconts">
              {group?.blogs?.map((data, index) => (
                <div key={index} className="singblogsthi">
                  <img
                    onClick={() => {
                      // navigate(`/blogdetail/${data?.title}`, { state: data });
                      router.push(`blogdetails/${data?._id}`);
                    }}
                    src={data?.images[0]}
                    className="blogimg cursor-pointer"
                    alt="kushel"
                  />

                  <div className="kbsertop">
                    <img
                      src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730457651/Mask_group_reswkg.png"
                      alt="kushel"
                    />
                    <span>
                      {new Date(data?.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3
                    className="cursor-pointer "
                    onClick={() => {
                      // navigate(`/blogdetail/${data?.title}`, { state: data });
                      router.push(`blogdetails/${data?._id}`);
                    }}
                  >
                    {data?.title?.split(" ")?.length > 11
                      ? `${data?.title?.split(" ").slice(0, 9).join(" ")}...`
                      : data?.title}
                  </h3>

                  <p
                    onClick={() => {
                      // navigate(`/blogdetail/${data?.title}`, { state: data });
                      router.push(`blogdetails/${data?._id}`);
                    }}
                    className="kblogpras cursor-pointer"
                  >
                    {" "}
                    {data?.subdescription?.length > 40
                      ? `${data.subdescription.slice(0, 40)}...`
                      : data?.subdescription}
                  </p>

                  <div
                    onClick={() => {
                      // navigate(`/blogdetail/${data?.title}`, { state: data });
                      router.push(`blogdetails/${data?._id}`);
                    }}
                    className="readmorekb"
                  >
                    <p
                      onClick={() => {
                        // navigate(`/blogdetail/${data?.title}`, { state: data });
                        router.push(`blogdetails/${data?._id}`);
                      }}
                    >
                      Read More
                    </p>{" "}
                    <GoArrowRight className="gorighafsds" />{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {
        (!selectedCategories || selectedCategories === undefined && selectedCategories === null) &&
        <div className="kbllogthisec2">
          <div className="singlegroblog">
            <div className="gro_heads">
              <h4>All</h4>
              <p className="grouline"></p>
            </div>

            {paginateData && paginateData?.length > 0 && (
              <div className="kkbloconts">
                {paginateData?.map((data, index) => (
                  <div key={index} className="singblogsthi">
                    <img
                      onClick={() => {
                        router.push(`blogdetails/${data?._id}`);
                      }}
                      src={data?.images[0] || ""}
                      className="blogimg cursor-pointer"
                      alt="kushel"
                    />

                    <div className="kbsertop">
                      <img
                        src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1730457651/Mask_group_reswkg.png"
                        alt="kushel"
                      />
                      <span>
                        {new Date(data?.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3
                      className="cursor-pointer "
                      onClick={() => {
                        router.push(`blogdetails/${data?._id}`);
                      }}
                    >
                      {data?.title?.split(" ")?.length > 11
                        ? `${data?.title?.split(" ").slice(0, 9).join(" ")}...`
                        : data?.title}
                    </h3>

                    <p
                      onClick={() => {
                        router.push(`blogdetails/${data?._id}`);
                      }}
                      className="kblogpras cursor-pointer"
                    >
                      {" "}
                      {data?.subdescription?.length > 40
                        ? `${data.subdescription.slice(0, 40)}...`
                        : data?.subdescription}
                    </p>

                    <div
                      onClick={() => {
                        router.push(`blogdetails/${data?._id}`);
                      }}
                      className="readmorekb"
                    >
                      <p
                        onClick={() => {
                          router.push(`blogdetails/${data?._id}`);
                        }}
                      >
                        Read More
                      </p>{" "}
                      <GoArrowRight className="gorighafsds" />{" "}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="buttoblogbns">
              <button
                onClick={() => {
                  if (currPage > 1) {
                    setCurrPage((prev) => prev - 1);
                  }
                }}
              >
                {" "}
                <FaArrowLeft className="changcolor" />{" "}
              </button>
              <div className="curpageblog">{currPage}</div>
              <button
                onClick={() => {
                  if (currPage < totalPage) {
                    setCurrPage((prev) => prev + 1);
                  }
                }}
              >
                {" "}
                <FaArrowRight className="changcolor" />{" "}
              </button>
            </div>
          </div>
          <div className="whtsApBtns">
            <button onClick={whatAppHandler}>
              <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
            </button>
            <button onClick={callHandler}>
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739172987/telephone_qjoh3j.png' alt="call-icon" title="call-icon" />
            </button>

          </div>
        </div>
      }
      <Footer />

    </div>
  );
}

export default Blog2;
