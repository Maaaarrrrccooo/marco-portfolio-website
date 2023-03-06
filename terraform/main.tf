locals {
  locations = {
    "sa" = "Southeast Asia"
    "ea" = "East Asia"
  }

  system_name = "az${var.location}${var.environment}${system_name}"

  env_code = {
    "dev" = "development"
    "stg" = "staging"
    "prd" = "prd"
  }
}

resource "azurerm_resource_group" "rg" {
  name     = local.system_name
  location = local.locations[var.location]
}

resource "azurerm_static_site" "static_site" {
  depends_on = [
    azurerm_resource_group.rg
  ]
  name                = "${local.system_name}-ss"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku_tier            = "Free"
  sku_size            = "Free"

  tags = {
    environment = locals.env_code[var.environment]
  }
}
