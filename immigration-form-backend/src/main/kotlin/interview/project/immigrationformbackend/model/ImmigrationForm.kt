package interview.project.immigrationformbackend.model

import jakarta.persistence.*
import java.time.LocalDate

@Entity
data class ImmigrationForm(
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    val id: Long? = null,

    val apt: Boolean,
    val city: String,
    val countryOfBirth: String,
    val countryOfCitizenship: String,
    val currentNonimmigrantStatus: String,
    val dateOfLastArrival: LocalDate,
    val datePassportExpires: LocalDate,
    val datePassportIssued: LocalDate,
    val dateStatusExpires: LocalDate,
    val eadNumber: Long,
    val flr: Boolean,
    val foreignApt: Boolean,
    val foreignCity: String,
    val foreignCountry: String,
    val foreignFlr: Boolean,
    val foreignNumber: Long,
    val foreignPostCode: String,
    val foreignProvince: String,
    val foreignState: String,
    val foreignSte: Boolean,
    val foreignStreetNumberAndName: String,
    val number: Long,
    val officeAddress: String,
    val passportCountryOfIssuance: String,
    val passportNumber: Long,
    val provinceOfBirth: String,
    val sevisNumber: Long,
    val state: String,
    val ste: Boolean,
    val streetNumberAndName: String,
    val typeOfOffice: String,
    val usStateOrForeignCountry: String,
    val validPassport: String,
    val zipCode: String
)