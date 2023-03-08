provider "azurerm" {
  use_oidc = true
  features {}
}

provider "cloudflare" {}
