package interview.project.immigrationformbackend.service

import interview.project.immigrationformbackend.model.ImmigrationForm
import interview.project.immigrationformbackend.repository.ImmigrationFormRepository
import org.springframework.stereotype.Service

@Service
class ImmigrationFormService(private val immigrationFormRepository: ImmigrationFormRepository){
    fun findAll(): List<ImmigrationForm> = immigrationFormRepository.findAll()
    fun save(immigrationForm: ImmigrationForm): ImmigrationForm = immigrationFormRepository.save(immigrationForm)
    fun getLatestForm(): ImmigrationForm? {
        return immigrationFormRepository.findTopByOrderByIdDesc()
    }
    fun updateLatestForm(form: ImmigrationForm): ImmigrationForm {
        val latestForm = getLatestForm()
        if (latestForm != null) {
            latestForm.apply {
                apt = form.apt
                city = form.city
                countryOfBirth = form.countryOfBirth
                countryOfCitizenship = form.countryOfCitizenship
                currentNonimmigrantStatus = form.currentNonimmigrantStatus
                dateOfLastArrival = form.dateOfLastArrival
                datePassportExpires = form.datePassportExpires
                datePassportIssued = form.datePassportIssued
                dateStatusExpires = form.dateStatusExpires
                eadNumber = form.eadNumber
                flr = form.flr
                foreignApt = form.foreignApt
                foreignCity = form.foreignCity
                foreignCountry = form.foreignCountry
                foreignFlr = form.foreignFlr
                foreignNumber = form.foreignNumber
                foreignPostalCode = form.foreignPostalCode
                foreignProvince = form.foreignProvince
                foreignState = form.foreignState
                foreignSte = form.foreignSte
                foreignStreetNumberAndName = form.foreignStreetNumberAndName
                number = form.number
                officeAddress = form.officeAddress
                passportCountryOfIssuance = form.passportCountryOfIssuance
                passportNumber = form.passportNumber
                provinceOfBirth = form.provinceOfBirth
                sevisNumber = form.sevisNumber
                state = form.state
                ste = form.ste
                streetNumberAndName = form.streetNumberAndName
                typeOfOffice = form.typeOfOffice
                usStateOrForeignCountry = form.usStateOrForeignCountry
                validPassport = form.validPassport
                zipCode = form.zipCode
            }
            return immigrationFormRepository.save(latestForm)
        }
        throw Exception("No latest form found")
    }
}