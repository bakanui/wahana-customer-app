"use client";
import { BackButton } from "@/components/BackButton";
import { useState, useEffect } from "react";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import dynamic from "next/dynamic";

interface formData {
  passangerName: string;
  ktp: string;
  sex: string;
  email: string;
}

const initialValue = [{ passangerName: "", ktp: "", sex: "Male", email: "" }];

if (typeof window !== "undefined") {
  const item = JSON.parse(localStorage.getItem("data")!);
  for (let i = 1; i < item?.totalPassanger; i++) {
    const passenger = {
      passangerName: "",
      ktp: "",
      sex: "Male",
      email: "",
    };
    initialValue.push(passenger);
  }
}

function OrderTicket() {
  const IDRconvert = Intl.NumberFormat("id-ID");

  const [data, setData] = useState(initialValue);
  const [getItem, setGetItem] = useState<any>();
  const [dataError, setDataError] = useState({ ...initialValue });

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("data")!);
    if (item) {
      setGetItem(item);
    }
  }, []);

  const handleChange = (i: any, e: any) => {
    const { name, value } = e.target;
    let users = [...data];
    users[i] = { ...users[i], [name]: value };
    setData(users);
  };

  const validate = () => {
    const newError = [...data];
    let isValid = true;

    data.forEach((field, index) => {
      newError[index] = {
        passangerName: "",
        ktp: "",
        sex: "",
        email: "",
      };

      if (!field.passangerName) {
        newError[index].passangerName = "name is required";
        isValid = false;
      }
      if (!field.ktp) {
        newError[index].ktp = "ktp is required";
        isValid = false;
      } else if (field.ktp.length < 16) {
        newError[index].ktp = "ktp need 16 digit";
        isValid = false;
      }
      if (!field.email) {
        newError[index].email = "email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(field.email)) {
        newError[index].email = "email is not valid";
        isValid = false;
      }
    });

    setDataError(newError);
    return isValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) {
      window.open(
        `https://api.whatsapp.com/send?phone=+6285156621870&text=I want to book Ticket for ${
          getItem?.tanggal
        } ${
          getItem?.tipeTrip === "round"
            ? `and return ${getItem?.tanggalReturn}`
            : ""
        } from ${getItem?.dermagaAwal} to ${getItem?.dermagaTujuan} with ${
          getItem?.totalPassanger
        } persons (adult: ${getItem?.passangerAdult}, child: ${
          getItem?.passangerChild
        }).${data.map((data, i, e) => {
          const index = i + 1;
          return ` person ${index} (name: ${data?.passangerName}, ktp: ${data?.ktp}, gender: ${data?.sex}, email: ${data?.email})`;
        })} `,
        "_blank"
      );
    }
  };

  return (
    <div className="bg-[#F0F0F0] flex flex-col h-full">
      <div className="flex md:ml-6 my-5 ml-2">
        <BackButton />
      </div>
      <div className="flex justify-center items-center">
        <form className="mx-2 md:mx-0" onSubmit={handleSubmit}>
          <div className="bg-white rounded-xl border border-primary p-5 py-7 mb-4">
            {data.map((data, i, e) => {
              const index = i + 1;
              return (
                <div>
                  <div className={`flex justify-end mb-1`}>
                    <hr className="flex-grow border-t-2 border-[#B7BFDD] my-[30px]" />
                    <div className="bg-[#B7BFDD] rounded-full w-16 h-16 flex items-center justify-center scale-75">
                      <span className="font-bold text-2xl">{index}</span>
                    </div>
                  </div>
                  <div>
                    <Input
                      label={"Passanger Name"}
                      name={"passangerName"}
                      placeholder={"Passanger Name..."}
                      onChangeText={(e) => handleChange(i, e)}
                      value={data?.passangerName}
                      error={dataError[i]?.passangerName}
                    />
                    <div className="grid grid-cols-2 gap-5">
                      <Input
                        label={"No. Identity (No. KTP / No. Paspor)"}
                        name={"ktp"}
                        placeholder={"Identity Number..."}
                        type={"number"}
                        onChangeText={(e) => handleChange(i, e)}
                        value={data?.ktp}
                        error={dataError[i]?.ktp}
                      />
                      <Select
                        label="Sex"
                        name={"sex"}
                        onChangeText={(e) => handleChange(i, e)}
                        value={data?.sex}
                      />
                    </div>
                    <Input
                      label={"Email"}
                      name={"email"}
                      subtitle={"*(Used to send booking code)"}
                      placeholder={"Example@gmail.com"}
                      onChangeText={(e) => handleChange(i, e)}
                      value={data?.email}
                      error={dataError[i]?.email}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-white rounded-xl border border-primary p-5 py-7 mb-5">
            <div className="flex justify-between">
              <h1>Total Payment</h1>
              <h1 className="text-2xl font-bold">
                {"Rp " + IDRconvert.format(245000)}
              </h1>
            </div>
          </div>
          <div className="mb-5 flex justify-center">
            <button
              type="submit"
              className="bg-primary flex h-[46px] rounded-md items-center justify-center w-[230px] text-[white] font-bold ml-3"
            >
              Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(OrderTicket), { ssr: false });
