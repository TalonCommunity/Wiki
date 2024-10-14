# Using Talon with Nix

:::note

If you don't know what Nix is, then you don't need to worry, there is no need to read this page

:::

Talon can be installed using the Nix package manager by using the [nix-community/talon-nix](https://github.com/nix-community/talon-nix) flake. It can be installed either as a system package or home manager package.

Because Talon is closed source, your system will need to be configured to accept [unfree packages](https://wiki.nixos.org/wiki/Unfree_software).

:::warning

This flake is not an official Talon package, but rather community-supported. If it is not working, please file an issue **upstream** to the flake, not Talon. If you have issues you can ask for help on the #talon-nixos channel on the official Slack server.

:::

There is an [FAQ](https://github.com/nix-community/talon-nix/blob/master/README.md#faq) in the talon-nix repo that you may also be interested in reading.

## Installation Instructions

There are a few ways you can install Talon with Nix, depending on your setup. The best approach is to import the talon-nix module and then enable it using the `programs.talon` option. This will ensure that the necessary udev packages are installed, which will allow you to use a Tobii eye tracker.

### Flake-based Installation

You will need to introduce the flake into your configuration. If you are using a flake-based configuration, you can add an input:

```nix
    inputs = {
        talon-nix.url = "github:nix-community/talon-nix";
    };
```

You can then import the module somewhere in your configuration and enable it:

```nix
    imports = [
        inputs.talon-nix.nixosModules.talon
    ];
    programs.talon.enable = true;
```

If you're using home-manager, you can't use `programs.talon.enable`, so will have to manually add the package to `home.pkgs`. This could be done by adding a nixpkgs overlay or just referencing the package directly (though the latter you may run into issues due to unfree).

```nix
home.packages = [
    talon-nix.packages.${builtins.currentSystem}.default
];
```

### Non-Flake-Based Installation

If you are using a non-flake-based configuration, you will need to bring the talon-nix flake into your configuration, which you can do using the [`builtins.getFlake`](https://noogle.dev/f/builtins/getFlake) function. You can then import the module and enable the program:

```nix
    imports = [
        (builtins.getFlake "github:nix-community/talon-nix").nixosModules.talon
    ];
    programs.talon.enable = true;
```

If for whatever reason you don't want to use the `programs.talon.enable = true` method you could also add the package as a nixpkgs overlay, or access it directly from your `environment.systemPackages` or `home.packages` arrays (though this may result in unfree-related issues)

```nix
  environment.systemPackages = with pkgs; [
    (builtins.getFlake "github:nix-community/talon-nix").packages.${builtins.currentSystem}.default
  ];
```

## Nix with the Community VSCode Command Server

There is a known bug that can happen if you installed VSCode with Nix, which can prevent the command server and command
client from seeing each other, which in turn breaks many commands and
[cursorless](https://github.com/cursorless-dev/cursorless). There is a solution to this, which is to apply code from two
pull requests, one for the [command client](https://github.com/talonhub/community/pull/1362) in your community repo/fork
and one for the [command server](https://github.com/pokey/command-server/pull/21) VSCode extension. Unfortunately, this
will mean having to build your own command server extension, but fortunately you can use the nix flake from [another
command server PR](https://github.com/pokey/command-server/pull/22) to easily build. You can follow the instructions
[here](https://github.com/talonhub/community/pull/1362#issuecomment-2101694031) and if you run into any issues feel free
to ask for help on the [talon slack server](https://talonvoice.slack.com/) in #talon-nixos or elsewhere.
