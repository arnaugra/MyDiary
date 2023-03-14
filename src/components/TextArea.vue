<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import UnderLine from '@tiptap/extension-underline'
import Button from '@components/Button.vue'
import { ref } from 'vue'

const props = defineProps({
    placeholder: {
        type: String,
        required: true,
    },
    css: {
        type: String,
        required: true,
        default: "",
    },
    value: {
        type: String,
        required: true,
        default: null,
    },
    id: {
        type: String,
        required: true,
        default: null,
    },
})

const emits = defineEmits(["inputValue", "focus"])

const value = ref(props.value);

const isFocused = ref(false);

const editor = useEditor({
    extensions: [
        StarterKit.configure({
            heading: {
                levels: [1, 2],
            },
        }),
        UnderLine,
        Placeholder.configure({
            placeholder: props.placeholder,
        }),
    ],
    content: value.value,
    editorProps: {
        attributes: {
            class: 'tiptap border-b-zinc-500 focus:border-b-zinc-800 focus:outline-none border-b-2 px-2 py-2 font-semibold cursor-text overflow-auto max-h-[40vh]',
        },
    },
    onFocus: () => {
        isFocused.value = true
        emits("focus")
    },
    onBlur: () => isFocused.value = false,
    onUpdate: ({ editor }) => emits("inputValue", editor.getHTML()),
})

/**
 * Toggles selected text bold.
 */
 const setBold = () => {
    editor.value.chain().focus().toggleBold().run();
};
/**
 * Toggles selected text underline.
 */
const setUnderline = () => {
    editor.value.chain().focus().toggleUnderline().run();
};
/**
 * Toggles selected text cursive/italic
 */
const setItalic = () => {
    editor.value.chain().focus().toggleItalic().run();
};
/**
 * Toggles selected text strike
 */
const setStrike = () => {
    editor.value.chain().focus().toggleStrike().run();
};
/**
 * Toggles selected text cursive/italic
 */
const setHead1 = () => {
    editor.value.chain().focus().toggleHeading({ level: 1 }).run();
};
/**
 * Toggles selected text cursive/italic
 */
const setHead2 = () => {
    editor.value.chain().focus().toggleHeading({ level: 2 }).run();
};

</script>

<template>

    <editor-content
        :editor="editor"
    />
    <div class="flex gap-2">
    <div class="flex items-center w-fit rounded-bl-lg rounded-br-lg overflow-hidden child:rounded-none">
        
        <Button
        class="font-black"
        :class="isFocused ? '' : ' cursor-default'"
        :textColor="'text-neutral-200 '"
        :bgColor="isFocused ? 'bg-zinc-800' : 'bg-zinc-500'"
        :hoverBgColor="isFocused ? 'hover:bg-zinc-600' : ''"
        css="!px-2 !h-fit !py-1 text-lg w-7"
        tabindex="-1"
        @click="setBold"
        >
            B
        </Button>
        
        <Button
        class="italic"
        :class="isFocused ? '' : ' cursor-default'"
        :textColor="'text-neutral-200 '"
        :bgColor="isFocused ? 'bg-zinc-800' : 'bg-zinc-500'"
        :hoverBgColor="isFocused ? 'hover:bg-zinc-600' : ''"
        css="!px-2 !h-fit !py-1 text-lg w-7"
        tabindex="-1"
        @click="setItalic"
        >
            I
        </Button>
        
        <Button
        class="underline"
        :class="isFocused ? '' : ' cursor-default'"
        :textColor="'text-neutral-200 '"
        :bgColor="isFocused ? 'bg-zinc-800' : 'bg-zinc-500'"
        :hoverBgColor="isFocused ? 'hover:bg-zinc-600' : ''"
        css="!px-2 !h-fit !py-1 text-lg w-7"
        tabindex="-1"
        @click="setUnderline"
        >
            U
        </Button>
        
        <Button
        class="line-through"
        :class="isFocused ? '' : ' cursor-default'"
        :textColor="'text-neutral-200 '"
        :bgColor="isFocused ? 'bg-zinc-800' : 'bg-zinc-500'"
        :hoverBgColor="isFocused ? 'hover:bg-zinc-600' : ''"
        css="!px-2 !h-fit !py-1 text-lg w-7"
        tabindex="-1"
        @click="setStrike"
        >
            T
        </Button>
        
    </div>
    <div class="flex items-center w-fit rounded-bl-lg rounded-br-lg overflow-hidden child:rounded-none">
        
        <Button
        :class="isFocused ? '' : ' cursor-default'"
        :textColor="'text-neutral-200 '"
        :bgColor="isFocused ? 'bg-zinc-800' : 'bg-zinc-500'"
        :hoverBgColor="isFocused ? 'hover:bg-zinc-600' : ''"
        css="!px-2 !h-fit !py-1 text-lg w-7"
        tabindex="-1"
        @click="setHead1"
        >
        <span>
            H<sup>1</sup>
        </span>
        </Button>
        
        <Button
        :class="isFocused ? '' : ' cursor-default'"
        :textColor="'text-neutral-200 '"
        :bgColor="isFocused ? 'bg-zinc-800' : 'bg-zinc-500'"
        :hoverBgColor="isFocused ? 'hover:bg-zinc-600' : ''"
        css="!px-2 !h-fit !py-1 text-lg w-7"
        tabindex="-1"
        @click="setHead2"
        >
        <span>
            H<sup>2</sup>
        </span>
        </Button>

    </div>
    </div>
</template>
