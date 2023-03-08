terraform {
  required_version = "1.0.7"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 2.88.0"
    }
  }

  backend "s3" {}
}
