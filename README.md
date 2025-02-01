# RefDiff GitHub Action

RefDiff is a GitHub Action used to detect changes in your codebase between two Git references.

## Inputs

- `base_ref`: The Git reference to compare. (Optional, default: `HEAD`)
- `compare_ref`: The Git reference to compare against. (Optional, default: `HEAD^`)
- `path`: The path to the codebase to analyze. (Optional, default: `.`)

## Outputs

- `has_changes`: Whether the codebase has changes. (Boolean)

## Usage

To use this action in your workflow, add the following step to your `.github/workflows/<workflow>.yml` file:

```yaml
jobs:
  refdiff_job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Run RefDiff
        uses: tinsight-io/refdif@v1
        id: refdiff
        with:
          base_ref: 'main'
          compare_ref: 'feature-branch'
          path: 'src/'

      - name: Check if codebase has changed
        run: |
          echo "Codebase changed: ${{ steps.refdiff.outputs.has_changes }"
```

In this example, the action compares the `feature-branch` against the `main` branch in the `src/` directory. The result is stored in the `has_changes` output, which can be used in subsequent steps.
