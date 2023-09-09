package interview.project.immigrationformbackend.model

import jakarta.persistence.*

@Entity
data class Immigrant(
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    val id: Long? = null,
    val countryOfBirth: String,
    val streetNumberAndName: String
)