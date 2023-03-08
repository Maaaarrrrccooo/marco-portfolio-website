terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.00.0"
    }

    required_providers {
      cloudflare = {
        source  = "cloudflare/cloudflare"
        version = ">= 3.0"
      }
    }
  }

  backend "s3" {}
}
