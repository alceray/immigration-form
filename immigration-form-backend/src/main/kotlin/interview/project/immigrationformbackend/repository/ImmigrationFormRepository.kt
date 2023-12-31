package interview.project.immigrationformbackend.repository

import interview.project.immigrationformbackend.model.ImmigrationForm
import org.springframework.data.jpa.repository.JpaRepository

interface ImmigrationFormRepository:JpaRepository<ImmigrationForm,Long>{
    fun findTopByOrderByIdDesc(): ImmigrationForm?
}
