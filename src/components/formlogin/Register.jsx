import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/userAction";
import { useFormik } from "formik"
import * as Yup from "yup";

const Register = () => {
    const formik = useFormik({
        // initialValues: giá trị khởi tạo
        //ValidationSchema: sẽ giúp check validation của những cái field nằm trong fia trị khởi tạo
        initialValues: {
            name: "",
            password: "",
            relationship: "",
            education: "",
        },
        validationSchema: Yup.object(
            {
                name: Yup.string().required("Vui lòng nhập tên"),
                password: Yup.string().required("Vui lòng nhập mật khẩu")
                    .min(8, "Vui lòng nhập ít nhất 8 kí tự ")
                    .max(16, "không nhập quá 16 kí tự"),
                relationship: Yup.string().required("Vui lòng nhập MQH"),
                education: Yup.string().required("Vui lòng nhập trình độ học vấn ")
            }
        ),
        onSubmit: async (values) => {
            try {
                await axios.post
                    ("https://664f4d11fafad45dfae33698.mockapi.io/users", values);

                formik.handleReset();

            } catch (error) {
                console.log(error.message)
            }
        }
    });

    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        password: "",
        relationship: "",
        education: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        // await axios.post("https://664b524535bbda10987c739f.mockapi.io/api/v1/users", user)
        dispatch(createUser(user)); //dawng ky 1 lan
    }; //suawr user, delete user
    return (
        <div style={{ position: "absolute", top: "20%", left: "20%" }}>
            <form onSubmit={formik.handleSubmit}>
                <input onChange={formik.handleChange}
                    type="text"
                    name="name"
                    placeholder="username"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name && (<p> {formik.errors.name} </p>)}
                <br /> <br />
                <input onChange={formik.handleChange}
                    type="text"
                    name="password"
                    placeholder="password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password && (<p> {formik.errors.password} </p>)}
                <br /> <br />
                <select name="relationship"
                    onChange={formik.handleChange}
                    value={formik.values.relationship}
                    onBlur={formik.handleBlur}
                >
                    <option value="">----relationship----</option>
                    <option value="married">Married</option>
                    <option value="alone">Alone</option>
                </select>
                {formik.errors.relationship && formik.touched.relationship && (<p> {formik.errors.relationship}</p>)}
                <br /> <br />
                <input onChange={formik.handleChange}
                    type="text"
                    placeholder="Education"
                    name="education"
                    value={formik.values.education}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.education && formik.touched.education && (<p> {formik.errors.education}</p>)}
                <br />
                <br />
                <button type="submit">Đăng ký đi</button>
            </form>
        </div>
    );
};

export default Register;