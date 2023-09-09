package interview.project.immigrationformbackend.service

import interview.project.immigrationformbackend.model.Immigrant
import interview.project.immigrationformbackend.repository.ImmigrantRepository
import org.springframework.stereotype.Service

@Service
class ImmigrantService(private val immigrantRepository: ImmigrantRepository){
    fun findAll(): List<Immigrant> = immigrantRepository.findAll()
    fun save(immigrant: Immigrant): Immigrant = immigrantRepository.save(immigrant)
    fun findById(id: Long): Immigrant? = immigrantRepository.findById(id).orElse(null)
}