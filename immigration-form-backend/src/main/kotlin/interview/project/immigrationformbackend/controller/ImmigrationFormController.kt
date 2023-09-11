package interview.project.immigrationformbackend.controller

import interview.project.immigrationformbackend.service.ImmigrationFormService
import interview.project.immigrationformbackend.model.ImmigrationForm
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/immigrationForm")
class ImmigrationFormController(
    private val immigrationFormService: ImmigrationFormService
    ){
    @GetMapping
    fun getAll(): List<ImmigrationForm> = immigrationFormService.findAll()
    @PostMapping("/submitForm")
    fun submitForm(@RequestBody immigrationForm: ImmigrationForm): ResponseEntity<ImmigrationForm>{
        val savedImmigrant = immigrationFormService.save(immigrationForm)
        return ResponseEntity(savedImmigrant, HttpStatus.CREATED)
    }
}