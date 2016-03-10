histomicstk.views.Body = girder.View.extend({
    initialize: function () {
        this.visView = new histomicstk.views.Visualization({
            parentView: this
        });
        this.panelGroupView = new histomicstk.views.PanelGroup({
            parentView: this
        });
    },
    render: function () {
        var spec = [
            '<?xml version="1.0" encoding="utf-8"?>',
            '<executable>',
            '<category>Tours</category>',
            '<title>Execution Model Tour</title>',
            '<description>',
            'Shows one of each type of parameter.',
            '</description>',
            '<version>1.0</version>',
            '<documentation-url></documentation-url>',
            '<license></license>',
            '<contributor>Daniel Blezek</contributor>',
            '<parameters>',
            '<label>Scalar Parameters</label>',
            '<description>',
            'Variations on scalar parameters',
            '</description>',
            '<integer>',
            '<name>integerVariable</name>',
            '<flag>i</flag>',
            '<longflag>integer</longflag>',
            '<description>',
            'An integer without constraints',
            '</description>',
            '<label>Integer Parameter</label>',
            '<default>30</default>',
            '</integer>',
            '<label>Scalar Parameters With Constraints</label>',
            '<description>Variations on scalar parameters</description>',
            '<double>',
            '<name>doubleVariable</name>',
            '<flag>d</flag>',
            '<longflag>double</longflag>',
            '<description>An double with constraints</description>',
            '<label>Double Parameter</label>',
            '<default>30</default>',
            '<constraints>',
            '<minimum>0</minimum>',
            '<maximum>1.e3</maximum>',
            '<step>0</step>',
            '</constraints>',
            '</double>',
            '</parameters>',
            '<parameters advanced="true">',
            '<label>Vector Parameters</label>',
            '<description>Variations on vector parameters</description>',
            '<float-vector>',
            '<name>floatVector</name>',
            '<flag>f</flag>',
            '<description>A vector of floats</description>',
            '<label>Float Vector Parameter</label>',
            '<default>1.3,2,-14</default>',
            '</float-vector>',
            '<string-vector>',
            '<name>stringVector</name>',
            '<longflag>string_vector</longflag>',
            '<description>A vector of strings</description>',
            '<label>String Vector Parameter</label>',
            '<default>"foo",bar,"foobar"</default>',
            '</string-vector>',
            '</parameters>',
            '<parameters>',
            '<label>Enumeration Parameters</label>',
            '<description>Variations on enumeration parameters</description>',
            '<string-enumeration>',
            '<name>stringChoice</name>',
            '<flag>e</flag>',
            '<longflag>enumeration</longflag>',
            '<description>An enumeration of strings</description>',
            '<label>String Enumeration Parameter</label>',
            '<default>foo</default>',
            '<element>foo</element>',
            '<element>"foobar"</element>',
            '<element>foofoo</element>',
            '</string-enumeration>',
            '</parameters>',
            '</executable>'
        ].join('');

        this.$el.html(histomicstk.templates.body());
        this.visView.setElement(this.$('#h-vis-container')).render();
        this.panelGroupView.setElement(this.$('#h-panel-group-container')).schema(spec);
    }
});
