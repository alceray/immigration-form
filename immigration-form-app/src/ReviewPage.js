import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

export default function ReviewPage() {
  const [data, setData] = useState(null);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/immigrationForm/latest")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleUpdate = (data) => {
    fetch("http://localhost:8080/api/immigrationForm/updateForm", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success: ", data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(handleUpdate)}
        className="bg-white p-8 rounded shadow-xl my-20 w-2/3 grid grid-cols-2 gap-4"
      >
        <h1 className="text-3xl font-bold col-span-2">Review Form</h1>
        <h3 className="text-xl my-2 col-span-2">
          <b>Part 3. Beneficiary Information</b>
        </h3>
        <label className="block">
          Alien Registration Number (A-Number)
          <InputMask mask="9 9 9 9 9 9 9 9 9" placeholder="_ _ _ _ _ _ _ _ _">
            {(inputProps) => (
              <input
                {...inputProps}
                className="w-full p-2 border font-mono"
                required
              />
            )}
          </InputMask>
        </label>
        <label className="block">
          Country of Birth
          <input
            type="text"
            defaultValue={data.countryOfBirth}
            {...register("countryOfBirth", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Province of Birth
          <input
            type="text"
            defaultValue={data.provinceOfBirth}
            {...register("provinceOfBirth", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Country of Citizenship or Nationality
          <input
            type="text"
            defaultValue={data.countryOfCitizenship}
            {...register("countryOfCitizenship", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded"
          />
        </label>
        <p className="mt-2 font-bold col-span-2">
          5. If the beneficiary is in the United States, complete the following:
        </p>
        <div className="flex gap-4">
          <label className="block">
            Date of Last Arrival (mm/dd/yyyy)
            <input
              type="text"
              defaultValue={data.dateOfLastArrival}
              {...register("dateOfLastArrival")}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block">
            I-94 Arrival-Departure Record Number
            <InputMask
              mask="9 9 9 9 9 9 9 9 9 9 9"
              placeholder="_ _ _ _ _ _ _ _ _ _ _"
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  className="w-full p-2 border font-mono"
                />
              )}
            </InputMask>
          </label>
        </div>
        <label className="block">
          Passport or Travel Document Number
          <input
            type="text"
            defaultValue={data.passportNumber}
            {...register("passportNumber")}
            className="w-full p-2 border rounded"
          />
        </label>
        <div className="flex gap-4">
          <label className="block">
            Date Passport or Travel Document Issued (mm/dd/yyyy)
            <input
              type="text"
              defaultValue={data.datePassportIssued}
              {...register("datePassportIssued")}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block">
            Date Passport or Travel Document Expires (mm/dd/yyyy)
            <input
              type="text"
              defaultValue={data.datePassportExpires}
              {...register("datePassportExpires")}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <label className="block">
          Passport of Travel Document Country of Issuance
          <input
            type="text"
            defaultValue={data.passportCountryOfIssuance}
            {...register("passportCountryOfIssuance")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Current Nonimmigrant Status
          <input
            type="text"
            defaultValue={data.currentNonimmigrantStatus}
            {...register("currentNonimmigrantStatus")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Date Status Expires or D/S (mm/dd/yyyy)
          <input
            type="text"
            defaultValue={data.dateStatusExpires}
            {...register("dateStatusExpires")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Student and Exchange Visitor Information System (SEVIS) Number (if
          any)
          <input
            type="text"
            defaultValue={data.sevisNumber}
            {...register("sevisNumber")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Employment Authorization Document (EAD) Number (if any)
          <input
            type="text"
            defaultValue={data.eadNumber}
            {...register("eadNumber")}
            className="w-full p-2 border rounded"
          />
        </label>
        <p className="mt-2 col-span-2">
          <b>6. Current Residential U.S. Address</b>
        </p>
        <label className="block">
          Street Number and Name
          <input
            type="text"
            defaultValue={data.streetNumberAndName}
            {...register("streetNumberAndName")}
            className="w-full p-2 border rounded"
          />
        </label>
        <div className="flex gap-4">
          <div className="flex space-x-4">
            <label className="flex flex-col items-center mt-4">
              Apt.
              <input
                type="checkbox"
                defaultChecked={data.apt}
                {...register("apt")}
              />
            </label>
            <label className="flex flex-col items-center mt-4">
              Ste.
              <input
                type="checkbox"
                defaultChecked={data.ste}
                {...register("ste")}
              />
            </label>
            <label className="flex flex-col items-center mt-4">
              Flr.
              <input
                type="checkbox"
                defaultChecked={data.flr}
                {...register("flr")}
              />
            </label>
          </div>
          <label className="block flex-grow">
            Number
            <input
              type="text"
              defaultValue={data.number}
              {...register("number")}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <label className="block">
          City or Town
          <input
            type="text"
            defaultValue={data.city}
            {...register("city")}
            className="w-full p-2 border rounded"
          />
        </label>
        <div className="flex gap-4">
          <label className="block flex-1">
            State
            <input
              type="text"
              defaultValue={data.state}
              {...register("state")}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block flex-1">
            ZIP Code
            <input
              type="text"
              defaultValue={data.zipCode}
              {...register("zipCode")}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <h3 className="text-xl font-bold mt-4 b-2 col-span-2">
          Part 4. Processing Information
        </h3>
        <label className="block">
          <b>a. Type of Office</b>
          <select
            defaultValue={data.typeOfOffice}
            {...register("typeOfOffice")}
            className="w-full p-2 border rounded"
          >
            <option value="blank"></option>
            <option value="consulate">Consulate</option>
            <option value="preflightInspection">Pre-flight inspection</option>
            <option value="portOfEntry">Port of Entry</option>
          </select>
        </label>
        <label className="block">
          <b>b. Office Address (City)</b>
          <input
            type="text"
            defaultValue={data.officeAddress}
            {...register("officeAddress")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          <b>c. U.S. State or Foreign Country</b>
          <input
            type="text"
            defaultValue={data.usStateOrForeignCountry}
            {...register("usStateOrForeignCountry")}
            className="w-full p-2 border rounded"
          />
        </label>
        <div></div>
        <p className="font-bold col-span-2">d. Benefiary's Foreign Address</p>
        <label className="block">
          Street Number and Name
          <input
            type="text"
            defaultValue={data.foreignStreetNumberAndName}
            {...register("foreignStreetNumberAndName")}
            className="w-full p-2 border rounded"
          />
        </label>
        <div className="flex gap-4">
          <div className="flex space-x-4">
            <label className="flex flex-col items-center mt-4">
              Apt.
              <input
                type="checkbox"
                defaultChecked={data.foreignApt}
                {...register("foreignApt")}
              />
            </label>
            <label className="flex flex-col items-center mt-4">
              Ste.
              <input
                type="checkbox"
                defaultChecked={data.foreignSte}
                {...register("foreignSte")}
              />
            </label>
            <label className="flex flex-col items-center mt-4">
              Flr.
              <input
                type="checkbox"
                defaultChecked={data.foreignFlr}
                {...register("foreignFlr")}
              />
            </label>
          </div>
          <label className="block flex-grow">
            Number
            <input
              type="text"
              defaultValue={data.foreignNumber}
              {...register("foreignNumber")}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <label className="block">
          City or Town
          <input
            type="text"
            defaultValue={data.foreignCity}
            {...register("foreignCity")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          State
          <input
            type="text"
            defaultValue={data.foreignState}
            {...register("foreignState")}
            className="w-full p-2 border rounded"
          />
        </label>

        <div className="flex gap-4">
          <label className="block flex-1">
            Province
            <input
              type="text"
              defaultValue={data.foreignProvince}
              {...register("foreignProvince")}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block flex-1">
            Postal Code
            <input
              type="text"
              defaultValue={data.foreignPostalCode}
              {...register("foreignPostalCode")}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <label className="block">
          Country
          <input
            type="text"
            defaultValue={data.foreignCountry}
            {...register("foreignCountry")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          <b>2.</b> Does each person in this petition have a valid passport?
          <select
            defaultValue={data.validPassport}
            {...register("validPassport")}
            className="w-full p-2 border rounded"
          >
            <option value="blank"></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <div></div>
        <button
          type="submit"
          className="bg-blue-500 text-xl text-white mt-5 py-2 px-4 rounded hover:bg-blue-600 col-span-2"
        >
          Update
        </button>
      </form>
    </div>
  );
}
