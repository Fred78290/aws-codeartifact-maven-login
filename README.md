# aws-codeartifact-maven-login
Required: `aws-actions/configure-aws-credentials`

## Goal

The goaf of this action is to create the file settings.xml need by maven to authenticate AWS codeartifact repositories

## Original code

At the beginning this code was forked from [lonewolfworks/aws-codeartifact-mvn-login](https://github.com/lonewolfworks/aws-codeartifact-mvn-login) to add a new feature but the PR was never reviewed by the author, so I decide to create this release.

## Usage

### `repo-name`

Repository Name... :D

### `repo-domain`

Domain of the CA repo

### `account-number`

Number of the owning account

### `settings-xml-path`

Folder path for settings.xml location, default ~/.m2

### `region`

AWS CodeArtifact Region

### `duration`

Token duration in seconds, default 900

### `mirror`

Allows to use codeartifact as mirror, default false

## Example

```yml
Test:
  runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          role-to-assume: arn:aws:iam::*****
          aws-region: us-east-1
          
      - name: aws-codeartifact-maven-login
        uses: Fred78290/aws-codeartifact-maven-login@v****
        with:
          repo-name: release
          repo-domain: Fred78290
          account-number: 1234567
          mirror: true
          region: us-east-1
```
