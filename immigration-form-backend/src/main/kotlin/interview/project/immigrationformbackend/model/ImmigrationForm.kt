package interview.project.immigrationformbackend.model

import com.fasterxml.jackson.annotation.JsonFormat
import jakarta.persistence.*
import java.time.LocalDate

@Entity
data class ImmigrationForm(
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    val id: Long? = null,

    var apt: Boolean?,
    var city: String?,
    var countryOfBirth: String,
    var countryOfCitizenship: String,
    var currentNonimmigrantStatus: String?,
    @JsonFormat(pattern="M/d/yyyy")
    var dateOfLastArrival: LocalDate?,
    @JsonFormat(pattern="M/d/yyyy")
    var datePassportExpires: LocalDate?,
    @JsonFormat(pattern="M/d/yyyy")
    var datePassportIssued: LocalDate?,
    @JsonFormat(pattern="M/d/yyyy")
    var dateStatusExpires: LocalDate?,
    var eadNumber: Long?,
    var flr: Boolean?,
    var foreignApt: Boolean?,
    var foreignCity: String?,
    var foreignCountry: String?,
    var foreignFlr: Boolean?,
    var foreignNumber: Long?,
    var foreignPostalCode: String?,
    var foreignProvince: String?,
    var foreignState: String?,
    var foreignSte: Boolean?,
    var foreignStreetNumberAndName: String?,
    var number: Long?,
    var officeAddress: String?,
    var passportCountryOfIssuance: String?,
    var passportNumber: Long?,
    var provinceOfBirth: String,
    var sevisNumber: Long?,
    var state: String?,
    var ste: Boolean?,
    var streetNumberAndName: String?,
    var typeOfOffice: String?,
    var usStateOrForeignCountry: String?,
    var validPassport: String?,
    var zipCode: String?
)