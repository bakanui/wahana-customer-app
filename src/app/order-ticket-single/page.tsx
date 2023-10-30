"use client";
import { BackButton } from "@/components/BackButton";
import { useState, useEffect, useContext } from "react";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import dynamic from "next/dynamic";

interface formData {
  passangerName: string;
  ktp: string;
  sex: string;
  email: string;
}

const initialValue = { passangerName: "", ktp: "", sex: "Male", email: "" };

function OrderTicket() {
  const IDRconvert = Intl.NumberFormat("id-ID");

  const [data, setData] = useState(initialValue);
  const [getItem, setGetItem] = useState<any>();
  const [dataError, setDataError] = useState<any>({});

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("data")!);
    if (item) {
      setGetItem(item);
    }
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validate = (): boolean => {
    const errors: Partial<formData> = {};
    if (!data.passangerName) {
      errors.passangerName = "name is required";
    } else if (!/^[a-zA-Z., ]*$/.test(data.passangerName)) {
      errors.passangerName = "name is not valid";
    }

    if (!data.ktp) {
      errors.ktp = "ktp is required";
    } else if (data.ktp.length < 16) {
      errors.ktp = "ktp need 16 digit";
    }

    if (!data.email) {
      errors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "email is not valid";
    }

    setDataError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) {
      window.open(
        `https://api.whatsapp.com/send?phone=+6281949778822&text=I want to book Ticket for ${
          getItem?.tanggal
        } ${
          getItem?.tipeTrip === "round"
            ? `and return ${getItem?.tanggalReturn}`
            : ""
        } from ${getItem?.dermagaAwal} to ${getItem?.dermagaTujuan} with ${
          getItem?.totalPassanger
        } person (adult: ${getItem?.passangerAdult}, child: ${
          getItem?.passangerChild
        }). (name: ${data.passangerName}, ktp: ${data.ktp}, gender: ${
          data.sex
        }, email: ${data.email})`,
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
            <Input
              label={"Passanger Name"}
              name={"passangerName"}
              placeholder={"Passanger Name..."}
              onChangeText={handleChange}
              value={data.passangerName}
              error={dataError.passangerName}
            />
            <div className="grid grid-cols-2 gap-5">
              <Input
                label={"No. Identity (No. KTP / No. Paspor)"}
                name={"ktp"}
                placeholder={"Identity Number..."}
                type={"number"}
                onChangeText={handleChange}
                value={data.ktp}
                error={dataError.ktp}
              />
              <Select
                label="Sex"
                name={"sex"}
                onChangeText={handleChange}
                value={data.sex}
              />
            </div>
            <Input
              label={"Email"}
              name={"email"}
              subtitle={"*(Used to send booking code)"}
              placeholder={"Example@gmail.com"}
              onChangeText={handleChange}
              value={data.email}
              error={dataError.email}
            />
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
              className="bg-primary flex h-[46px] rounded-md items-center justify-center w-[230px] cursor-pointer"
            >
              <span className="text-[white] font-bold ml-3">Booking</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(OrderTicket), { ssr: false });
