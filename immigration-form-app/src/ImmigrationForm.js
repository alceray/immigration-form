import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

export default function ImmigrationForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-xl my-20 w-2/3 grid grid-cols-2 gap-4"
      >
        <h1 className="text-3xl font-bold col-span-2">Form I-129</h1>
        <h3 className="text-xl my-2 col-span-2">
          <b>Part 3. Beneficiary Information</b> (Information about the
          beneficary/beneficiaries you are filing for. Complete the blocks
          below. Use the Attachment-1 sheet to name each beneficiary included in
          this petition.) (continued)
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
            {...register("passportNumber")}
            className="w-full p-2 border rounded"
          />
        </label>
        <div className="flex gap-4">
          <label className="block">
            Date Passport or Travel Document Issued (mm/dd/yyyy)
            <input
              type="text"
              {...register("datePassportIssued")}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block">
            Date Passport or Travel Document Expires (mm/dd/yyyy)
            <input
              type="text"
              {...register("datePassportExpires")}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <label className="block">
          Passport of Travel Document Country of Issuance
          <input
            type="text"
            {...register("passportCountryOfIssuance")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Current Nonimmigrant Status
          <input
            type="text"
            {...register("currentNonimmigrantStatus")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Date Status Expires or D/S (mm/dd/yyyy)
          <input
            type="text"
            {...register("dateStatusExpires")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Student and Exchange Visitor Information System (SEVIS) Number (if
          any)
          <input
            type="text"
            {...register("sevisNumber")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Employment Authorization Document (EAD) Number (if any)
          <input
            type="text"
            {...register("eadNumber")}
            className="w-full p-2 border rounded"
          />
        </label>
        <p className="mt-2 col-span-2">
          <b>6. Current Residential U.S. Address</b> (if applicable) (do not
          list a P.O. Box)
        </p>
        <label className="block">
          Street Number and Name
          <input
            type="text"
            {...register("streetNumberAndName")}
            className="w-full p-2 border rounded"
          />
        </label>
        <div className="flex gap-4">
          <div className="flex space-x-4">
            <label className="flex flex-col items-center mt-4">
              Apt.
              <input type="checkbox" {...register("apt")} />
            </label>
            <label className="flex flex-col items-center mt-4">
              Ste.
              <input type="checkbox" {...register("ste")} />
            </label>
            <label className="flex flex-col items-center mt-4">
              Flr.
              <input type="checkbox" {...register("flr")} />
            </label>
          </div>
          <label className="block flex-grow">
            Number
            <input
              type="text"
              {...register("number")}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <label className="block">
          City or Town
          <input
            type="text"
            {...register("city")}
            className="w-full p-2 border rounded"
          />
        </label>
        <div className="flex gap-4">
          <label className="block flex-1">
            State
            <input
              type="text"
              {...register("state")}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block flex-1">
            ZIP Code
            <input
              type="text"
              {...register("zipCode")}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <h3 className="text-xl font-bold mt-4 b-2 col-span-2">
          Part 4. Processing Information
        </h3>
        <p className="mt-2 col-span-2">
          <b>1.</b> If a beneficiary or beneficiaries named in <b>Part 3.</b>{" "}
          is/are outside the United States, or a requested extension of stay or
          change of status cannot be granted, state the U.S. Consolute or
          inspection facility you want notified if this petition is approved.
        </p>
        <label className="block">
          <b>a. Type of Office</b>
          <select
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
            {...register("officeAddress")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          <b>c. U.S. State or Foreign Country</b>
          <input
            type="text"
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
            {...register("beneficiaryStreetNumberAndName")}
            className="w-full p-2 border rounded"
          />
        </label>
        <div className="flex gap-4">
          <div className="flex space-x-4">
            <label className="flex flex-col items-center mt-4">
              Apt.
              <input type="checkbox" {...register("beneficiaryApt")} />
            </label>
            <label className="flex flex-col items-center mt-4">
              Ste.
              <input type="checkbox" {...register("beneficiarySte")} />
            </label>
            <label className="flex flex-col items-center mt-4">
              Flr.
              <input type="checkbox" {...register("beneficiaryFlr")} />
            </label>
          </div>
          <label className="block flex-grow">
            Number
            <input
              type="text"
              {...register("beneficiaryNumber")}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <label className="block">
          City or Town
          <input
            type="text"
            {...register("beneficiaryCity")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          State
          <input
            type="text"
            {...register("beneficiaryState")}
            className="w-full p-2 border rounded"
          />
        </label>

        <div className="flex gap-4">
          <label className="block flex-1">
            Province
            <input
              type="text"
              {...register("beneficiaryProvince")}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block flex-1">
            Postal Code
            <input
              type="text"
              {...register("beneficiaryPostalCode")}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <label className="block">
          Country
          <input
            type="text"
            {...register("beneficiaryCountry")}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          <b>2.</b> Does each person in this petition have a valid passport? (if
          no, go to <b>Part 9.</b> and type or print your explanation)
          <select
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
          Submit
        </button>
      </form>
    </div>
  );
}
