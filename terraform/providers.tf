provider "azurerm" {
  use_oidc = true
  features {}
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

