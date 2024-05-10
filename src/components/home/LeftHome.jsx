import * as React from "react";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import likePages from "../../data/LikePages.json";
const listItem = [
    {
        id: 1,
        icon: OndemandVideoIcon,
        text: "Watch",
    },
    {
        id: 2,
        icon: DateRangeIcon,
        text: "Events",
    },
    {
        id: 3,
        icon: PeopleAltIcon,
        text: "Friends",
    },
    {
        id: 4,
        icon: AccessTimeIcon,
        text: "Memories",
    },

    {
        id: 5,
        icon: AccessTimeIcon,
        text: "ABC",
    },
    {
        id: 6,
        icon: AccessTimeIcon,
        text: "XYZ",
    },
];
const LeftHome = () => {
    const initNumberList = 4;
    const [dataList, setDataList] = React.useState([]);
    const [dataPages, setDataPages] = React.useState(likePages);
    const [numberList, setnumberList] = React.useState(initNumberList);
    const [numberPages, setnumberPages] = React.useState(initNumberList);
    React.useEffect(() => {
        setDataList(listItem.slice(0, numberList));
        setDataPages(likePages.slice(0, numberPages));
    }, [numberList, numberPages]);
    const handleShow = () => {
        setnumberList(listItem.length);
    };

    const handleHide = () => {
        setnumberList(initNumberList);
    };
    const handleShowPage = () => {

    };
    return (
        <div className="lefthome-container">
            <div className="topleft">
                <ul>
                    {dataList.map((item) => (
                        <li key={item.id}>
                            <div className="icon">
                                <item.icon />
                            </div>
                            <span className="text">{item.text}</span>
                        </li>
                    ))}
                </ul>
                <button className="btn-see-more" onClick={() => {
                    {
                        numberList === 4 && handleShow()
                    }
                    {
                        numberList === 6 && handleHide()
                    }
                }}
                >
                    <span className="text">{numberList === 4 ? "See more" : "Hide"}</span>
                    <span className="icon">
                        <KeyboardArrowDownIcon />
                    </span>
                </button>
            </div>
            <div className="bottomleft">
                <div className="title">
                    <span className="text">Shortcuts</span>
                    <span className="icon">
                        <MenuIcon />
                    </span>
                </div>
                <div className="list-page">
                    <ul>
                        {dataPages.map((page) => (
                            <li>
                                <img src={page.image} className="image" />
                                <span className="text">{page.pageName}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="btn-see-more" onClick={() => {
                        {
                            numberPages === initNumberList &&
                                setnumberPages(likePages.length);
                        }
                        {
                            numberPages === likePages.length &&
                                setnumberPages(initNumberList);
                        }
                    }}
                    >
                        <span className="text">
                            {numberPages === initNumberList ? "See more" : "Hide"}</span>

                        <KeyboardArrowDownIcon />

                    </button>
                </div>
            </div>
        </div>
    );
};

export default LeftHome;