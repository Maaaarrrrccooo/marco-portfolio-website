variable "system_name" {
  type = string
}

variable "environment" {
  type = string
  validation {
    condition     = contains(["dev", "stg", "prd"], var.environment)
    error_message = "The environment value must be valid."
  }
}

variable "location" {
  type = string
  validation {
    condition     = contains(["sa", "ea"], var.location)
    error_message = "The location value must be valid."
  }
}
