variable "system_name" {
  type = string
}

variable "environment" {
  type = string
  validation {
    condition = contains(["dev","stg","prd"], var.environment)
    error_message = "The environment value must be valid. dev for development, stg for staging, and prd for production"
  }
}

variable "location" {
  type = string
  validation {
    condition     = contains(["sa", "ea"], var.location)
    error_message = "The only allowed location values are sa, and ea"
  }
}
