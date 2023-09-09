package interview.project.immigrationformbackend.repository

import interview.project.immigrationformbackend.model.Immigrant
import org.springframework.data.jpa.repository.JpaRepository

interface ImmigrantRepository:JpaRepository<Immigrant,Long>
