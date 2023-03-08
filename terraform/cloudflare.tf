resource "cloudflare_record" "cloudflare_cname_record_main" {
  depends_on = [
    azurerm_static_site.static_site
  ]
  zone_id = var.cloudflare_zone_id
  name    = "@"
  value   = "7tzlpnspq36z9pk3r5swvgdxlnzr097n"
  type    = "TXT"
  ttl     = 3600
}

resource "cloudflare_record" "cloudflare_cname_record_www" {
  depends_on = [
    azurerm_static_site.static_site
  ]
  zone_id = var.cloudflare_zone_id
  name    = "www"
  value   = azurerm_static_site.static_site.default_host_name
  type    = "CNAME"
  ttl     = 3600
}
