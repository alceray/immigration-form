package interview.project.immigrationformbackend.controller

import interview.project.immigrationformbackend.service.ImmigrantService
import interview.project.immigrationformbackend.model.Immigrant
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/immigrants")
class ImmigrantController(private val immigrantService: ImmigrantService){
    @GetMapping
    fun getAll(): List<Immigrant> = immigrantService.findAll()
    @PostMapping
    fun create(@RequestBody immigrant: Immigrant): Immigrant = immigrantService.save(immigrant)
    @GetMapping("/{id}")
    fun getById(@PathVariable id: Long): Immigrant? = immigrantService.findById(id)
}