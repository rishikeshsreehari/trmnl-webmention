# Webmentions Display for TRMNL

Display your [webmentions](https://indieweb.org/Webmention) from [webmention.io](https://webmention.io) on your TRMNL e-ink device.

Webmentions are a W3C recommendation that enables websites to notify each other when content is linked, liked, reposted, or replied to—bringing decentralized social interactions to the IndieWeb.

<img width="1824" height="1148" alt="image" src="https://github.com/user-attachments/assets/4c6b2a74-ee38-4aa5-803a-3b6b332eb3d8" />


## Features

- Shows recent webmentions with author name, source domain, and target page
- QR codes for quick access to source URLs
- Displays count of mentions received in the last 30 days
- Clean, e-ink optimized layout

## Setup

### 1. Get Your Webmention.io Token

1. Go to [webmention.io](https://webmention.io) and sign in with your domain
2. Navigate to [Settings](https://webmention.io/settings)
3. Copy your API token

### 2. Install the Plugin

Install from the [TRMNL Plugin Directory](https://usetrmnl.com/plugins) or add manually to your device.

### 3. Configure

Enter your Webmention.io API token in the plugin settings.

## Views

| View | File | Description |
|------|------|-------------|
| Full | `full.liquid` | Full screen display |
| Half Horizontal | `half_horizontal.liquid` | Half screen, landscape |
| Half Vertical | `half_vertical.liquid` | Half screen, portrait |
| Quadrant | `quadrant.liquid` | Quarter screen |

## Local Development
```bash
cp trmnlp.yml.example .trmnlp.yml
```

Edit `.trmnlp.yml` and add your token:
```yaml
custom_fields:
  webmention_token: "YOUR_TOKEN_HERE"
```

Run the development server:
```bash
docker run \
  --publish 8001:4567 \
  --volume "$(pwd):/plugin" \
  trmnl/trmnlp serve
```

## Links

- [Webmention.io](https://webmention.io) - Webmention hosting service
- [IndieWeb Webmention](https://indieweb.org/Webmention) - Learn more about webmentions

## Support

If you find this plugin useful, consider supporting my work: [r1l.in/s](https://r1l.in/s)

**Need a custom TRMNL plugin for your business?** I'm available for contract work. Reach out at hello@rishikeshs.com.

## License

MIT
