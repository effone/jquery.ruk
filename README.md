# jquery.ruk
Yet another full-fledged jQuery accordion plugin with bare minimum code. 607 bytes only (418 bytes : js, 189 bytes : css

## Dependency
Since it is a jQuery plugin; jQuery library should be included on prior.

## Instalation
Include `jquery.ruk.min.css` from dist folder.
```
<link rel="stylesheet" href="./dist/jquery.ruk.min.css">
```

Include `jquery.ruk.min.js` from dist folder.
```
<script src="./dist/jquery.ruk.min.js"></script>
```
Initiate the plugin.
```
$('.target').ruk();
```
Thats all. Your target div is now ruk (an accordion).

npm? `npm install jquery.ruk`

## Target Element Structure

The target element should have div groups, each containing collapse groups in div pairs : one for title and the other for content (that will hide or show). Targetting element structure other than this may cause the plugin malfunction. Example:

```
<div class="target"> <!-- the ruk element -->

    <div> <!-- group : 1 -->
        <div>Title Block</div> <!-- title block -->
        <div>Content Block</div> <!-- content block (will show / hide) -->
    </div>

    <div> <!-- group : 2 -->
        <div>Title Block</div>
        <div>Content Block</div>
    </div>

    <div> <!-- group : 3 -->
        <div>Title Block</div>
        <div>Content Block</div>
    </div>

     <!-- add as many similar groups as you want -->

</div>
```

## Option(s)
As of now there is only one option and that is `only`. By default this is set to `false` but if you set it `true` only one element will remain opened at-a-time, that means clicking on a 'title block' will close other opened 'content blocks' before opening its content.

You can set `only` option on this way:
```
$('.target').ruk({
    only: true
});
```

## Callback
This plugin supports a callback and extends the ability to get the group sequence number and it's content state after each title click. This can be helpful for 
- Saving the states of the groups using cookies
- Targetting to load ajax content in the content block when it gets opened.

etc.

You can set the callback this way:
```
$('.target').ruk({
    after: function (id, state) {
        // 'id' is the group serial number
        // 'state' is corresponding 'content block' state. If the content block is visible the state is 'true', else 'false'.
        console.log(id + " : " + state);
    }
});
```
## Version History
1.0.0 : <2018.08.22>
- Initial stable release