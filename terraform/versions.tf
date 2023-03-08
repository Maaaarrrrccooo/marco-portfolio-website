terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.00.0"
    }

    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = ">= 3.0"
    }

  }

  backend "s3" {}
}
