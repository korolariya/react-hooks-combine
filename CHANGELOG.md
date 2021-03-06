# 1.7.2
- Update internals and readme.md

# 1.7.1
- Update internals and readme.md

# 1.7.0
- Export #pipe function to create custom hook based on hooks collection to replace combine in case if it's necessary
- Refine utils internals

# 1.6.0
- Add loadingName setting for withAsyncEffect hook creator

# 1.5.0
- Add withContext transform option

# 1.4.2
- Internal cleanup

# 1.4.1
- Fix package json issues

# 1.4.0
- Add errorName setting for withAsyncEffect hook creator

# 1.3.4
### BUG
- Fix withAsyncEffect loading state issue
- Fix withStateHandlers tick issue

# 1.3.3
- withAsyncEffect's effectHandler accepts prevStateProps object as third argument

# 1.3.2
- (withEffect, withLayoutEffect)'s effectHandler accepts prevStateProps object as third argument

# 1.3.1

### BUG
- Fix sharing state between components while using withStateHandlers

# 1.3.0

### BUGS
- withStateHandlers doesn't create action wrappers on each call

### BREAKING CHANGES
- withStateHandlers actionHandlers API has changed to fix issue with [freezing state](https://github.com/Shalimov/react-hooks-combine/issues/31).
- withStateHandlers actionHandlers accept props now as well as declared state and args.

# 1.2.0
- Refine withStateHandlers to avoid updates in case if there are no changes inside object
- Add forwardRef param for `combine` function to support ref forwarding
- Add withImperativeHandle support

# 1.1.1
- Fix issue with default props. Child component only used them while Parent skiped them.

# 1.1.0
- Update `combine` function by adding `transformPropsBefore` property to filter/omit/map props

# 1.0.0
No changes

