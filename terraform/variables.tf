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
  type    = string
  default = "ea"
  validation {
    condition     = contains(["sa", "ea"], var.location)
    error_message = "The location value must be valid."
  }
}

variable "cloudflare_zone_id" {
  type = string
}
