package interview.project.immigrationformbackend.service

import interview.project.immigrationformbackend.model.ImmigrationForm
import interview.project.immigrationformbackend.repository.ImmigrationFormRepository
import org.springframework.stereotype.Service

@Service
class ImmigrationFormService(private val immigrationFormRepository: ImmigrationFormRepository){
    fun findAll(): List<ImmigrationForm> = immigrationFormRepository.findAll()
    fun save(immigrationForm: ImmigrationForm): ImmigrationForm = immigrationFormRepository.save(immigrationForm)
}